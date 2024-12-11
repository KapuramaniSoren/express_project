const express = require("express");
const router = express.Router();

// Home Route
router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// About Route
router.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

module.exports = router;
