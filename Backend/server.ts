import express from 'express';

let tryp = 'tr';

const PORT = process.env.PORT || 3000;
const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('serverRunning');
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
