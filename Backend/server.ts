import express from 'express';

import colors from 'colors';
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes';

import { errorHandler, notFound } from './middleware/errorMiddleware';
import { connectDb } from './config/db';

// preload
colors.enable();
dotenv.config();
connectDb();

// top level decleration, define port or default.
const PORT = process.env.PORT || 3000;
const app: express.Application = express();

//https://stackoverflow.com/a/47232318/12634008 bodyparser -> json
app.use(express.json());

//use morgan logging if env=development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log('lets go'.red);
}

// routes
app.use('/api/users', userRoutes);

app.get('/fileStats', (req, res) => {
  try {
    const stats = fs.statSync(path.resolve(__dirname + '/data'));
    console.log(stats);
    const statObject = {
      isFile: stats.isFile().toString(),
      isDirectory: stats.isDirectory().toString(),
    };

    res.send(statObject);
  } catch (err) {
    console.error(err);
  }
});

app.get('/file/read', async (req, res) => {
  await fs.readFile(
    path.resolve(__dirname + '/data/data.txt'),
    'utf8',
    (err, data) => {
      if (err) {
        console.error(`error ${err}`.red);
      }
      console.log(`good to go:`.bold + `${data}`.green.underline);
    }
  );
});

app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${PORT}`.trap.yellow
  );
});
