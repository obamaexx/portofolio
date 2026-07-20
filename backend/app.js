const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Obama World');
});

app.get('/about', (req, res) => {
  res.send('we tayo');
});

app.get('/contact', (req, res) => {
  res.send('hey');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



