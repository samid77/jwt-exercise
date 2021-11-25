const exp = require('express');
const auth = require('./routes/auth');

const app = exp();

app.use('/auth', auth)

app.listen(5000, () => {
  console.log('listening on port 5000')
})

app.get("/", (req, res) => {
  res.send("Node works")
})