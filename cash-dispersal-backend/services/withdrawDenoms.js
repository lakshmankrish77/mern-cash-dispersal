const curBal = new Map();
curBal.set(100, 5);
curBal.set(50, 5);
curBal.set(20, 5);
curBal.set(10, 5);
curBal.set(5, 5);
curBal.set(2, 5);

const denomCountCheck = (denom, count) => {
  if (curBal.has(denom)) {
    if (curBal.get(denom) >= count) {
      console.log(
        "denomCountCheck: count-",
        count,
        "curBal.count-",
        curBal.get(denom)
      );
      console.log("denomCountCheck: current count-", curBal.get(denom) - count);
      curBal.set(denom, curBal.get(denom) - count);
      console.log("denomCountCheck: ", curBal.get(denom));
    } else {
      count = curBal.get(denom);
      curBal.set(denom, 0);
    }
    // return curBal;
  }
};

var interimBalance = new Map();
const denomSplit = async (amount, currencyDenoms) => {
  // interimBalance.set(100, 0);
  // interimBalance.set(50, 0);
  // interimBalance.set(20, 0);
  // interimBalance.set(10, 0);
  // interimBalance.set(5, 0);
  // interimBalance.set(2, 0);

  console.log("Amount to process:", amount);
  console.log("port:", process.env.PORT);
  try {
    var count = 0;
    var balanceAmt = 0;
    // var currentBalance = currencyDenoms;
    console.log("printing seasonssss..");
    for (const fixedDenom of currencyDenoms.keys()) {
      console.log("fixedDenom:", fixedDenom, "calc-loop:", amount / fixedDenom);

      if (amount / fixedDenom > 1) {
        console.log("more amount", amount / fixedDenom);

        if (curBal.get(fixedDenom) == 0) {
          interimBalance.set(fixedDenom, currencyDenoms.get(fixedDenom));
          console.log("MoreAmt- interimBalance-", interimBalance);
          currencyDenoms.delete(fixedDenom);
          denomSplit(amount, currencyDenoms);
        }

        count = Math.floor(amount / fixedDenom);
        balanceAmt = amount % fixedDenom;
        // console.log("balanceAmt:", balanceAmt);

        denomCountCheck(fixedDenom, count);
        console.log("curBal:", curBal);
        // console.log("currencyDenoms:", currencyDenoms);

        if (balanceAmt >= 2) {
          console.log("balanceAmt-calling:", balanceAmt);
          denomSplit(balanceAmt, currencyDenoms);
        }

        throw new Error("count finalized");
      } else if (amount / fixedDenom < 1) {
        console.log("less amount", amount / fixedDenom);
      } else if (amount / fixedDenom === 1) {
        if (curBal.get(fixedDenom) == 0) {
          interimBalance.set(fixedDenom, currencyDenoms.get(fixedDenom));
          currencyDenoms.delete(fixedDenom);
          console.log("Equal - interimBalance-", interimBalance);
          denomSplit(amount, currencyDenoms);
        }
        denomCountCheck(fixedDenom, 1);
        console.log("curBal:", curBal);

        throw new Error("count Equal");
      } else {
        console.log("What is happening?", amount / fixedDenom);
      }
    }
  } catch (error) {}

  console.log("interimBalance:", interimBalance);
  var finalBalance = new Map([...curBal, ...interimBalance]);
  console.log("finalBalance:", finalBalance);
  return {
    // denom: denom,
    // count: count,
    // balanceAmt: balanceAmt,
    // currentDispenserBalance:
    // currencyDenoms,
    curBal,
  };
};

module.exports = { denomSplit, curBal };
