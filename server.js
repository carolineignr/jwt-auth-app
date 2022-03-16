const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login?', (req, res) => {
  const USERNAME = 'carol';
  const PASSWORD = 'carol123';

  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    const user = {
      id: 1,
      name: 'Caroline',
      username: 'carol',
    };
    const token = jwt.sign(user, 'chave123');

    res.status(200);
    res.json({ token, user })
  } else {
    res.status(403);
    res.json({ message: 'Wrong username or password' });
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})