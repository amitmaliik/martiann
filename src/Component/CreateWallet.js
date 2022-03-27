import React from "react";
import { Button, Grid } from "@mui/material";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Alert from "@mui/material/Alert";
import {
  Card,
  CardContent,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
} from "@mui/material";

export const Wallet = () => {
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="Wallet">
      <Card
        className="Cards"
        sx={({ minWidth: 100 }, { minHeight: 1000 })}
        style={{ backgroundColor: "#16171B" }}
      >
        <CardContent>
          <h1 className="heading" style={{ color: "white" }}>
            Create a Wallet
          </h1>
          <Grid container spacing={2} className="form">
            <Grid item xs={8}>
              <InputLabel style={{ color: "white" }}>Wallet name</InputLabel>
              <OutlinedInput
                type="text"
                style={{ backgroundColor: "#1F2024", color: "white" }}
                value={values.name}
                fullWidth={true}
                required={true}
                onChange={handleChange("name")}
              ></OutlinedInput>
            </Grid>
            <Grid item xs={8}>
              <InputLabel
                style={{ color: "white" }}
                htmlFor="outlined-adornment-password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                style={{ backgroundColor: "#1F2024", color: "white" }}
                fullWidth={true}
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                required={true}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <VisibilityOff></VisibilityOff>
                      ) : (
                        <Visibility></Visibility>
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </Grid>
            <Grid item xs={8}>
              <InputLabel
                style={{ color: "white" }}
                htmlFor="outlined-adornment-password"
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                style={{ backgroundColor: "#1F2024", color: "white" }}
                id="utlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                fullWidth={true}
                required={true}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? (
                        <VisibilityOff></VisibilityOff>
                      ) : (
                        <Visibility></Visibility>
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </Grid>
          </Grid>
        </CardContent>

        <Grid container spacing={2}>
          <Grid sx={{ p: "24px", mx: "10px" }}>
            <Button style={{ background: "white" }} className="btn">
              Cancel
            </Button>
            <Button
              style={{
                background: "green",
                color: "white",
                marginLeft: "12px",
              }}
              className="btn"
              type="submit"
            >
              Next
            </Button>
          </Grid>
        </Grid>

        <Alert
          style={{ backgroundColor: "#1F2024", color: "white" }}
          className="warning"
          severity="error"
        >
          Do not forget to save your mnemonic phrase.You will need this to
          access to your wallet
        </Alert>
      </Card>
    </div>
  );
};
