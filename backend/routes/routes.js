const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "Hi!" });
});

router.get("/asset/:id", (req, res, next) => {
  const id = req.params.id;

  axios.get(`https://api.coincap.io/v2/assets/${id}`)
    .then((response) => {
      res.json({ data: response.data.data });
    })
    .catch((error) => {
      console.log(error);
      res.json({ message: "error" });
    });
});

module.exports = router;
