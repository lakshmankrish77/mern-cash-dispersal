import React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "react-ui";
import { createTheme } from "@material-ui/core/styles";


import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";


import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


const theme = createTheme({
  palette: {
    text: {
      disabled: "#eee",
    },
  },
});

export const CashWithdrawPage = (props) => {
  const API_URL = "http://localhost:5002/api/atm";
  const [userEnteredAmount, setUserEnteredAmount] = useState(0);
  const [snackbar_status, setSnackbar_status] = useState(false);

  const [two_dollars, setTwo_dollars] = useState(0);
  const [five_dollars, setFive_dollars] = useState(0);
  const [ten_dollars, setTen_dollars] = useState(0);
  const [twenty_dollars, setTwenty_dollars] = useState(0);
  const [fifty_dollars, setFifty_dollars] = useState(0);
  const [hundred_dollars, setHundred_dollars] = useState(0);

  useEffect(() => {
    getCurrentBalance();
  }, []);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar_status(true);
  };

  const getCurrentBalance = async () => {
    // e.preventDefault();

    // alert('onsumbmit'+ userEnteredAmount);

    console.log("CALLING fetch api:");
    // alert("CALLING fetch api:");
    await fetch(`${API_URL}`)
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          console.log("error fetch api: ", error);
          return Promise.reject(error);
        }
        console.log("current balance:", data);
        setTwo_dollars(data.CurrentBalance.TWO_DOLLARS);
        setFive_dollars(data.CurrentBalance.FIVE_DOLLARS);
        setTen_dollars(data.CurrentBalance.TEN_DOLLARS);
        setTwenty_dollars(data.CurrentBalance.TWENTY_DOLLARS);
        setFifty_dollars(data.CurrentBalance.FIFTY_DOLLARS);
        setHundred_dollars(data.CurrentBalance.HUNDRED_DOLLARS);

        // alert(data.CurrentBalance.HUNDRED_DOLLARS);
      })
      .catch((error) => {
        // this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });

    // alert("fetch api result");
    // alert(data.search);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // alert('onsumbmit'+ userEnteredAmount);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEnteredAmount: userEnteredAmount }),
    };

    // const response = await fetch(`${API_URL}`, requestOptions);
    console.log("CALLING fetch api:");
    // alert("CALLING fetch api:");
    await fetch(`${API_URL}/withdraw`, requestOptions)
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          console.log("error fetch api: ", error);
          return Promise.reject(error);
        }
        console.log("current balance:", data);
        setTwo_dollars(data.CurrentBalance.TWO_DOLLARS);
        setFive_dollars(data.CurrentBalance.FIVE_DOLLARS);
        setTen_dollars(data.CurrentBalance.TEN_DOLLARS);
        setTwenty_dollars(data.CurrentBalance.TWENTY_DOLLARS);
        setFifty_dollars(data.CurrentBalance.FIFTY_DOLLARS);
        setHundred_dollars(data.CurrentBalance.HUNDRED_DOLLARS);

        // alert (data.CurrentBalance.HUNDRED_DOLLARS)
      })
      .catch((error) => {
        // this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  };

  return (
    <React.Fragment>
      <Box
        component="form"
        active={props.toggle}
        sx={{
          p: 2,
          mt: 15,
          ml: 20,
          mr: 50,
          mb: 10,
          bgcolor: "background.paper",
          border: "4px grey",
          boxShadow: 4,
          borderRadius: 1,
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          "& .MuiFormControl-root": { m: 2 },
          "& .MuiButton-root": { m: 1 },
        }}
      >
        <Box component="div" sx={{ visibility: "visible" }}>
          Cash Withdrawal
        </Box>
        <Snackbar
          open={snackbar_status}
          autoHideDuration={3000}
          onClose={() => handleClose("clickaway")}
          anchorOrigin={{
            horizontal: "center",
            vertical: "top",
          }}
        >
          <Alert
            variant="filled"
            onClose={() => handleClose("clickaway")}
            severity="success"
            sx={{ width: "100%" }}
            action={
              <React.Fragment>
                <IconButton color="inherit">
                  <CloseIcon />
                </IconButton>
              </React.Fragment>
            }
          >
            Cash Withdrawal Completed
          </Alert>
        </Snackbar>
        <React.Fragment>
          <React.Fragment>
            <TextField
              required
              id="filled-required"
              name="Enter Amount to Withdraw"
              label="Enter Withdrawal Amount"
              variant="standard"
              value={userEnteredAmount}
              onChange={(e) => setUserEnteredAmount(e.target.value)}
            />
          </React.Fragment>

          <Box component="div" sx={{ visibility: "visible" }}>
          <React.Fragment>
            <Button
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              onClick={(e) => onSubmit(e)}
            >
              Submit <b />
              <b />
              <b /> <SendIcon />
            </Button>
          </React.Fragment>
        </Box>
        </React.Fragment>
      </Box>
      <Box
        component="form"
        sx={{
          p: 2,
          mt: 5,
          ml: 20,
          mr: 50,
          mb: 10,
          bgcolor: "background.paper",
          border: "4px grey",
          boxShadow: 4,
          borderRadius: 1,
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Box component="div" sx={{ visibility: "visible" }}>
          Current Balance
        </Box>
        <br />
        <Box
          component="div"
          sx={{ visibility: "visible", bgcolor: "background.paper" }}
        >
          <React.Fragment>
            <ThemeProvider theme={theme}>
              <TextField
                disabled
                color="success"
                id="TWO_DOLLARS_FIELD"
                label="TWO_DOLLARS"
                defaultValue="$2"
              />
            </ThemeProvider>
            <TextField
              label="$2 DENOMINATION"
              disabled
              variant="filled"
              color="secondary"
              id="TWO_DOLLARS"
              value={two_dollars}
            />
          </React.Fragment>
        
        <React.Fragment>
          <TextField
            disabled
            id="FIVE_DOLLARS_FIELD"
            label="FIVE_DOLLARS"
            defaultValue="$5"
          />
          <TextField
            label="$5 DENOMINATION"
            disabled
            variant="filled"
            id="FIVE_DOLLARS"
            value={five_dollars}
          />
        </React.Fragment>
        </Box>
        <Box
          component="div"
          sx={{ visibility: "visible", bgcolor: "background.paper" }}
        >
        <React.Fragment>
          <TextField
            disabled
            id="TEN_DOLLARS_FIELD"
            label="TEN_DOLLARS"
            defaultValue="$10"
          />
          <TextField
            label="$10 DENOMINATION"
            disabled
            variant="filled"
            id="TEN_DOLLARS"
            value={ten_dollars}
          />
        </React.Fragment>
        <React.Fragment>
          <TextField
            disabled
            id="TWENTY_DOLLARS_FIELD"
            label="TWENTY_DOLLARS"
            defaultValue="$20"
          />
          <TextField
            disabled
            variant="filled"
            label="$20 DENOMINATION"
            id="TWENTY_DOLLARS"
            value={twenty_dollars}
          />
        </React.Fragment>
        </Box>
        <Box
          component="div"
          sx={{ visibility: "visible", bgcolor: "background.paper" }}
        >
        <React.Fragment>
          <TextField
            disabled
            id="FIFTY_DOLLARS_FIELD"
            label="FIFTY_DOLLARS"
            defaultValue="$50"
          />
          <TextField
            disabled
            variant="filled"
            label="$50 DENOMINATION"
            id="FIFTY_DOLLARS"
            value={fifty_dollars}
          />
        </React.Fragment>
        <React.Fragment>
          <TextField
            disabled
            id="HUNDRED_DOLLARS_FIELD"
            label="HUNDRED_DOLLARS"
            defaultValue="$100"
          />
          <TextField
            variant="filled"
            color="secondary"
            disabled
            label="$100 DENOMINATION"
            id="HUNDRED_DOLLARS"
            value={hundred_dollars}
          />
        </React.Fragment>
        </Box>
      </Box>
    </React.Fragment>
  );
};
