import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3030
const TOKEN = process.env.LINE_ACCESS_TOKEN

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get("/", (req, res) => {
  res.sendStatus(200)
})

app.post("/webhook", function(req, res) {
  res.send("HTTP POST request sent to the webhook URL!")
  console.log("HTTP POST request sent to the webhook URL! w/ TOKEN: " + TOKEN)
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})