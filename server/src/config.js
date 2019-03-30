import path from 'path';
import {} from 'dotenv/config';

const env =
  ['test', 'production', 'development', 'staging'].indexOf(
    process.env.NODE_ENV,
  ) === -1
    ? 'development'
    : process.env.NODE_ENV;

const port = process.env.PORT || 2206;

const database = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
};

export {env, port, database};
