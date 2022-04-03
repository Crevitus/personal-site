import React from 'react';
import { LoaderFunction, json, useLoaderData } from 'remix';
import { getRecentMoistureReadings } from 'app/server/db.server';
import { fromUnixTime } from 'date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import Layout from '~/components/Layout';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function toDateTime(secs: string) {
  return fromUnixTime(Number(secs));
}

function mapToChart(dataPoint: { humidity: number; timestamp: string }) {
  return {
    x: toDateTime(dataPoint.timestamp),
    y: dataPoint.humidity,
  };
}

export const loader: LoaderFunction = async () => {
  const readings = await getRecentMoistureReadings();

  return json({
    readings,
  });
};

const Hydroponics: React.FC = () => {
  const { readings } = useLoaderData();

  const options = {
    scales: {
      y: {
        ticks: {
          min: 0,
          max: 100,
        },
      },
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        min: toDateTime(readings[0].timestamp),
        max: toDateTime(readings[readings.length - 1].timestamp),
      },
    },
    maintainAspectRatio: false,
  };

  const dataConfig = {
    labels: ['Time'],
    datasets: [
      {
        label: 'Sensor 1',
        fill: false,
        lineTension: 0.4,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: readings.map((reading: any) => mapToChart(reading)),
      },
    ],
  };

  return (
    <Layout>
      <div className="mx-auto h-3/4 w-3/4">
        <Line
          data={dataConfig as any}
          width={600}
          height={400}
          options={options as any}
          redraw
        />
      </div>
    </Layout>
  );
};

export default Hydroponics;
