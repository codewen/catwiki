const path = require('path');
const express = require("express");
const { getAllBreeds, getBreedById, getBreedImageById } = require("./api");
require("./database");

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from CatWikisss!" });
});

app.get("/api/breeds", async (req, res) => {
  console.log("breadks called");
  res.json(await getAllBreeds());
});

app.get("/api/breed/:id", async (req, res) => {
  res.json(await getBreedById(req.params.id));
});

app.get("/api/breed/image/:id", async (req, res) => {
  res.json(await getBreedImageById(req.params.id));
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

