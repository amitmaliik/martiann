import React from "react";
import { Button, Grid } from "@mui/material";
import { Card, CardContent, OutlinedInput, InputLabel } from "@mui/material";

export const Wallet = () => {
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="Wallet">
      <Card
        className="Cards"
        sx={({ minWidth: 80 }, { minHeight: 800 })}
        style={{ backgroundColor: "#16171B" }}
      >
        <CardContent>
          <h1 className="heading" style={{ color: "white" }}>
            Create a Wallet
          </h1>
          <Grid container spacing={2} className="form">
            <Grid item xs={5}>
              <InputLabel style={{ color: "white" }}>
                Pseudo-anonymous username
              </InputLabel>
              <OutlinedInput
                type="text"
                style={{ backgroundColor: "#1F2024", color: "white" }}
                value={values.name}
                fullWidth={true}
                required={true}
                onChange={handleChange("name")}
              ></OutlinedInput>
            </Grid>

            <Grid item xs={5}>
              <InputLabel style={{ color: "white" }}>
                Pseudo-anonymous name
              </InputLabel>
              <OutlinedInput
                type="text"
                style={{ backgroundColor: "#1F2024", color: "white" }}
                value={values.name}
                fullWidth={true}
                required={true}
                onChange={handleChange("name")}
              ></OutlinedInput>
            </Grid>

            <Grid item xs={6}>
              <InputLabel style={{ color: "white" }}>Bio</InputLabel>
              <OutlinedInput
                type="text"
                style={{ backgroundColor: "#1F2024", color: "white" }}
                value={values.name}
                fullWidth={true}
                required={true}
                onChange={handleChange("name")}
              ></OutlinedInput>
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
              o
            >
              Next
            </Button>
          </Grid>
        </Grid>

        {/* <Alert
          style={{ backgroundColor: "#1F2024", color: "white" }}
          className="warning"
          severity="error"
        >
          Do not forget to save your mnemonic phrase.You will need this to
          access to your wallet
        </Alert> */}
      </Card>
    </div>
  );
};
