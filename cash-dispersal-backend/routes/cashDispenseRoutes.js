const express = require("express");
// const { fromJSON } = require("flatted");
const router = express.Router();
// const validateToken = require("../middleware/validateTokenHandler");
const {
  cashWithdraw,
  depositCash,
  getCurrentBalance,
} = require("../controllers/cashDispenseController");


router.route("/withdraw").post(cashWithdraw);
router.route("/deposit").post(depositCash);
router.route("/").get(getCurrentBalance);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get Money from ATM" });
});

router.route("/").post((req, res) => {
  res
    .status(200)
    .json({ message: `Reduce amount based on the user given denominations` });
});



module.exports = router;
