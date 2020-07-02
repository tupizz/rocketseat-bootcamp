import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';

import bodyParser from 'body-parser';
import cors from 'cors';

import './database';
import routes from './routes';
import uploadConfig from './config/upload';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

// Error handler
app.use(errorHandler);

app.listen(3333, () => {
  console.log();
  console.log('----------------------------------');
  console.log('🚀 Server started on port 3333! ');
  console.log('----------------------------------');
  console.log();
});
