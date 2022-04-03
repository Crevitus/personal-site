import admin from 'firebase-admin';
import { initialiseApp } from 'app/server/firebase.server';

export const getRecentMoistureReadings = async () => {
  initialiseApp();
  const db = admin.database();

  const ref = db.ref('/olive-tree');
  const readings = await ref.limitToLast(20).get();
  const readingValues = readings.val();

  return Object.keys(readingValues).map((k) => readingValues[k]);
};
