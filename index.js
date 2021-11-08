const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/request',async(req,res) => {
  console.log(req.body);
  console.log(req.headers);
  res.sendStatus(201);
})

const port = 3001;

app.listen(port, () => console.log('Server running...'));
