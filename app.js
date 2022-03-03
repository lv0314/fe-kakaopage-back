const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const port = 3000;

const srcRouter = require("./routes/src");

app.get("/", (req, res) => {
  res.send('Hello World')
})

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3030");
//   next();
// })
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  next();
})


app.use(
  cookieParser(process.env.COOKIE_SECRET, { sameSite: "none", secure: true })
);

app.use("/src", srcRouter)

app.listen(port, () => {
  console.log(`Back server listening on port ${port}`)
})