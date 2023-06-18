import React from "react";


import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useState, useEffect } from "react";
import { ThemeProvider } from "react-ui";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    text: {
      disabled: "#eee",
    },
  },
});

export const CashDepositPage = (props) => { 
  // const API_URL = "http://localhost:5002/api/atm";
  
  var host_url = "http://localhost:";
  var suffix_url= "/api/atm";
  const server_port =  process.env.REACT_APP_BACKEND_SERVER_PORT;
  const API_URL = host_url + server_port + suffix_url;

  // const API_URL = `'http://localhost:'+ ${process.env.REACT_APP_BACKEND_SERVER_PORT} +'/api/atm'`;
  console.log(API_URL);
  

  const [userDepositAmount, setUserDepositAmount] = useState(0);
  const [userDepositDenomination, setUserDepositDenomination] = useState(100);

  // const [snackbar_status, setSnackbar_status] = useState(false);

  const [two_dollars, setTwo_dollars] = useState(0);
  const [five_dollars, setFive_dollars] = useState(0);
  const [ten_dollars, setTen_dollars] = useState(0);
  const [twenty_dollars, setTwenty_dollars] = useState(0);
  const [fifty_dollars, setFifty_dollars] = useState(0);
  const [hundred_dollars, setHundred_dollars] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getCurrentBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
  const getCurrentBalance = async () => {    

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
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // alert('denom'+ userDepositDenomination);
    // alert('amtont:'+ userDepositAmount);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        denomination: userDepositDenomination,
        denom_count: userDepositAmount,
      }),
    };

    // const response = await fetch(`${API_URL}`, requestOptions);
    console.log("CALLING fetch api:");
    // alert("CALLING fetch api:");
    await fetch(`${API_URL}/deposit`, requestOptions)
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
          Cash Deposit
        </Box>
        <React.Fragment>
          <React.Fragment>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userDepositDenomination}
                label="Age"
                onChange={(e) => setUserDepositDenomination(e.target.value)}
              >
                <MenuItem value={100}>Hundred</MenuItem>
                <MenuItem value={50}>Fifty</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                
              </Select>
            </FormControl>
            <TextField
              required
              id="filled-required"
              name="Enter Amount to Deposit"
              label="Enter Deposit Amount"
              variant="standard"
              value={userDepositAmount}
              onChange={(e) => setUserDepositAmount(e.target.value)}
            />
          </React.Fragment>
        </React.Fragment>
        <Box component="div" sx={{ visibility: "visible" }}>
          <React.Fragment>
            <Button
              size="large"
              sx={{fontSize: 24}}
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

// export default App;
