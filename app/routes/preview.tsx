import React from 'react';
import { Preview } from 'react-bricks/frontend';
import type { MetaFunction } from '@remix-run/node';

interface MetaProps {
  data: any;
}

export const meta: MetaFunction = ({ data }: MetaProps) => {
  return {
    title: 'Preview',
  };
};

const PagePreview: React.FC = () => {
  return <Preview />;
};

export default PagePreview;
