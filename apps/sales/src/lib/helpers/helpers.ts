import { NODE_ENV } from '$env/static/private';

export const LOCAL_URL = 'http://localhost:5174';
export const PROD_URL = 'https://system.trucksuite.com';

export const BUCKET = 'ts-storage';
export const REGION = 'nyc3';

export const appHost = NODE_ENV === 'development' ? LOCAL_URL : PROD_URL;
