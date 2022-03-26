import * as React from "react";
import { InputLabel, OutlinedInput } from "@mui/material";

export default function PermanentDrawerLeft() {
  const [values, setValues] = React.useState({
    name: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div style={{ display: "flex" }} className="xyz">
      <div
        style={{ width: "20vw", height: "100vh", backgroundColor: "#1E67F2" }}
      ></div>

      <div
        style={{ width: "80vw", display: "block", backgroundColor: "#232442" }}
      >
        <h1 className="heading">Welcome To Mask Network</h1>

        <h3>You Can create Personas and connect Social Accounts</h3>

        <InputLabel
          className="input2"
          style={{ color: "black", position: "relative", top: "55vh" }}
        >
          Persona
        </InputLabel>
        <OutlinedInput
          type="text"
          style={{
            width: "65vw",
            backgroundColor: "#1F2024",
            margin: "40px",
            color: "white",
            position: "relative",
            top: "55vh",
          }}
          value={values.name}
          fullWidth={true}
          required={true}
          onChange={handleChange("name")}
        ></OutlinedInput>
        <button
          style={{
            width: "30vw",
            height: "5vh",
            borderRadius: "5%",
            backgroundColor: "#1E67F2",
            position: "relative",
            top: "55vh",
          }}
        ></button>
      </div>
    </div>
  );
}
