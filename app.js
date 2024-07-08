import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static('public'));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/home", (req, res) =>{
//   res.send("<h1>Hello</h1>")
// })

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});