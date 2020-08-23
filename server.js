const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var fetch = require("node-fetch");

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send("proxy for accessing API");
});

app.post("/api/predict", (req, res) => {
  // console.log({ ...req.body, Sex: parseInt(req.body["Sex"]) });
  const num_attributes = [
    "Sex",
    "Age",
    "Family_size",
    "Pclass",
    "mil_cler_nob",
    "married",
  ];

  num_attributes.forEach((attr) => (req.body[attr] = parseInt(req.body[attr])));
  console.log(req.body);

  fetch("https://zjoegdu8h1.execute-api.us-east-1.amazonaws.com/dev/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((response) => response.json())
    .then((prediction) => {
      console.log(prediction);
      res.send(prediction);
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(`server running in ${process.env.NODE_ENV} on port ${port}`)
);
