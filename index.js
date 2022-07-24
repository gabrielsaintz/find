const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/home", (req, res) => {
   res.render("home");
});

app.get("/profileclient", (req, res) => {
   res.render("myaccountclient");
});

app.get("/profilepro", (req, res) => {
   res.render("myaccountpro");
});

app.get("/myacc", (req, res) => {
   res.render("myacc");
});

app.get("/searchresult", (req, res) => {
   res.render("search");
});

app.get("/schedule", (req, res) => {
   res.render("schedules");
});

app.get("/createaccount", (req, res) => {
   res.render("createaccount");
});

app.get("/login", (req, res) => {
   res.render("login");
});

app.get("/recoverpassword", (req, res) => {
   res.render("recoverpassword");
});

app.get("/createaccpro", (req, res) => {
   res.render("createaccpro");
});

app.listen(PORT, () => console.log("O servidor está funcionando corretamente"));
