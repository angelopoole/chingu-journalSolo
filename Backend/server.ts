import express from 'express';

import colors from 'colors';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes';
import noteRoutes from './routes/noteRoutes';

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
app.use('/api/notes', noteRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/Client/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'))
  );
}
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${PORT}`.yellow.bold
  );
});
