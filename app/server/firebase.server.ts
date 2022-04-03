import { cert, getApps, initializeApp } from 'firebase-admin/app';

export const initialiseApp = () => {
  if (getApps().length === 0) {
    initializeApp({
      credential: cert(JSON.parse(process.env.SERVICE_ACCOUNT as string)),
      databaseURL: process.env.DATABASE_URL,
    });
  }
};
