const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes/routes");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", routes);

app.listen(PORT, () => console.log("O servidor está funcionando corretamente"));
