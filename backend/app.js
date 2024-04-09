import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';
import { resolve } from 'node:path';
import { error } from 'node:console';

const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/places', async (req, res) => {
  const fileContent = await fs.readFile('./data/places.json');

  const placesData = JSON.parse(fileContent);

  res.status(200).json({ places: placesData });
});


app.get('/user-places', async (req, res) => {
  const fileContent = await fs.readFile('./data/user-places.json');

  const places = JSON.parse(fileContent);

  res.status(200).json({ places });
});

app.put('/user-places', async (req, res) => {
  const places = req.body.places;

  await fs.writeFile('./data/user-places.json', JSON.stringify(places));

  res.status(200).json({ message: 'User places updated!' });
});

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

console.log('yerb ake <3');

// app.listen(3000, () => {
//   console.log('nong mok');
// });


app.listen(3000);
console.log('salysaly');

const a = 1;

// create
// const b = new Promise((resolve, reject) => {
//   const x = a + 10
//   if (x <= 10) {
//     resolve(x)
//   } else {
//     reject(null)
//   }
// })

// handle
// b()
// .then((result) => console.log(result), (adasdas) => console.log('reject', adasdas))
// .catch((adasdas) => console.log('reject', adasdas))

// b()


