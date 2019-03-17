import mongoose from 'mongoose';
import {database} from './config';

mongoose
  .connect(
    `mongodb://${database.host}:${database.port}/${database.name}`,
    {useNewUrlParser: true},
  )
  .then(() => console.log('Connect database successfully'))
  .catch(err => console.error('Connect database failed'));
