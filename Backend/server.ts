import express from 'express';
const PORT = 3000;

let tryp = 'tr';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('serverRunning');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
