const { Router } = require("express");
const router = Router();

router.get("/home", (req, res) => {
   res.render("home");
});

router.get("/profileclient", (req, res) => {
   res.render("myaccountclient");
});

router.get("/profilepro", (req, res) => {
   res.render("myaccountpro");
});

router.get("/myacc", (req, res) => {
   res.render("myacc");
});

router.get("/searchresult", (req, res) => {
   res.render("search");
});

router.get("/schedule", (req, res) => {
   res.render("schedules");
});

router.get("/createaccount", (req, res) => {
   res.render("createaccount");
});

router.get("/login", (req, res) => {
   res.render("login");
});

router.get("/recoverpassword", (req, res) => {
   res.render("recoverpassword");
});

router.get("/createaccpro", (req, res) => {
   res.render("createaccpro");
});

module.exports = router;
