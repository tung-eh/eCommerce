import path from 'path';
import {} from 'dotenv/config';

const env =
  ['test', 'production', 'development', 'staging'].indexOf(
    process.env.NODE_ENV,
  ) === -1
    ? 'development'
    : process.env.NODE_ENV;

const port = process.env.PORT || 2206;

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/eCommerce';

export {env, port, dbUri};
