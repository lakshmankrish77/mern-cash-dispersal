const asyncHandler = require("express-async-handler");
const { denomSplit, curBal } = require("../services/withdrawDenoms.js");
const {
  convertNumericKeysToWords,
} = require("../utils/convertKeysToString.js");

const CurrentBalanceModel = require("../models/currentBalanceModels");

//@desc CREATE a contact
//@route POST /api/contacts
//@access public
const depositCash = asyncHandler(async (req, res) => {
  console.log("Upload Cash - Req Body :", req.body);
  const { denomination, denom_count } = req.body;

  if (!denomination || !denom_count) {
    res.status(404);
    throw new Error("All Fields are mandatory");
  }

  console.log("curBal in cashDeposit:", curBal);
  var currentDenom = curBal.get(denomination);

  if (!currentDenom) {
    curBal.set(denomination, Number(denom_count));
  } else {
    curBal.set(denomination, Number(currentDenom) + Number(denom_count));
  }
  console.log("curBal in cashDeposit- 2:", curBal);
  var currentBalance = convertNumericKeysToWords(Object.fromEntries(curBal));
  res.status(200).json({ CurrentBalance: currentBalance });
});

///@desc GET ALL currency denominations
//@route GET /api/contacts
//@access public
const getCurrentBalance = asyncHandler(async (req, res) => {
  var currentBalance = convertNumericKeysToWords(Object.fromEntries(curBal));
  res.status(200).json({ CurrentBalance: currentBalance });
});

//@desc Cash Withdrawal process
//@route POST /api/atm
//@access public
const cashWithdraw = asyncHandler(async (req, res) => {
  console.log("Cash Withdrawal - Req Body :", req.body);
  const { userEnteredAmount } = req.body;
  console.log("Request - Cash Dispenser:", req.body);

  if (!userEnteredAmount) {
    res.status(404);
    throw new Error("Amount is mandatory");
  }

  await denomSplit(
    userEnteredAmount,
    // withdrawDenoms,
    // denoms_map
    curBal
  );

  var currentBalance = convertNumericKeysToWords(Object.fromEntries(curBal));
  console.log("currentBalance:", currentBalance);
  res.status(200).json({ CurrentBalance: currentBalance });
});
module.exports = {
  cashWithdraw,
  getCurrentBalance,
  depositCash,
};
