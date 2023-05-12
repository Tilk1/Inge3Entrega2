const express = require("express");
const app = express();
const port = 5000;
const fs = require("fs");
const hangmanRouter = require("./modules/hangman/router_hangman");
const rpslsRouter = require("./modules/rpsls/router_rpsls");
const tatetiRouter = require("./modules/tateti/router_tateti");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/hangman", hangmanRouter);
app.use("/rpsls", rpslsRouter);
app.use("/tateti", tatetiRouter);

app.get("/", (req, res) => {
  res.send("Aguante vocaloid!");
});

app.listen(port, () => console.log(`Server listening on port: ${port}`));
