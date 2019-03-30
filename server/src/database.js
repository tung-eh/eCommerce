import mongoose from 'mongoose';
import {dbUri} from './config';

mongoose
  .connect(
    dbUri,
    {useNewUrlParser: true},
  )
  .then(() => console.log('Connect database successfully'))
  .catch(err => console.error('Connect database failed'));
