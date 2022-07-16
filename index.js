const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/home", (req, res) => {
   res.render("home");
});

app.get("/client", (req, res) => {
   res.render("myaccountclient");
});

app.get("/pro", (req, res) => {
   res.render("myaccountpro");
});

app.get("/searchresult", (req, res) => {
   res.render("search");
});

app.listen(PORT, () => console.log("O servidor está funcionando corretamente"));
