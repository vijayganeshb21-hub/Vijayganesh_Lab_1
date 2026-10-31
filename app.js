
const express = require("express");

const app = express();
const PORT = 3000;


app.get("/", (request, response) => {
  response.status(200).send("Welcome to my Express server!");
});


app.get("/about", (request, response) => {
  response.status(200).json({
    name: "Bonthala Vijay Ganesh",
    section: "106-1A"
  });
});


app.get("/time", (request, response) => {
  response.status(200).json({
    currentDateTime: new Date()
  });
});


app.use((request, response) => {
  response.status(404).send("404 - Page Not Found");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
