import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({mess: 'Ola abestadus'});
});

app.listen(3333, () => console.log('estamos de pé!'));