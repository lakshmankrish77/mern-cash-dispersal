const express = require("express");
const cors = require('cors');
const app = express();

// const errorHandler = require("./middleware/errorHandler.js");
const { CONSTANTS } = require("./constants");
// const connectDB = require("./config/dbConnection");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

//DB Connection
// connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/atm", require("./routes/cashDispenseRoutes.js"));

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  console.log(err.statusCode);

  switch (err.statusCode) {
    case CONSTANTS.VALIDATION_FAILURE:
      res.status(err.statusCode).json({
        status: err.status,
        title: "Not Validated",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case CONSTANTS.NOT_FOUND:
      res.status(err.statusCode).json({
        status: err.status,
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case CONSTANTS.SERVERERROR:
      res.status(err.statusCode).json({
        status: err.status,
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.status(err.statusCode).json({
        status: err.status,
        title: "Some Internal Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
  //   res.status(err.statusCode).json({
  //     status: err.statusCode,
  //     message: err.message,
  //     stackTrace: err.stack,
  //   });
});

app.listen(port, () => {
  console.log(`server running on port#: ${port}`);
});
