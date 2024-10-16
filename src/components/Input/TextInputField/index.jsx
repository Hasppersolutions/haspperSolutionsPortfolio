import { TextField } from "@mui/material";
import React from "react";

const Index = ({ name, placeholder, value, onChange, sx, type, multiline }) => {
  return (
    <>
      <TextField
        size="small"
        fullWidth
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        multiline={multiline}
        minRows={multiline ? 4 : 1}
        sx={[
          primary,
          sx,
          multiline
            ? {
                "& .MuiOutlinedInput-input": {
                  padding: "0px !important",
                },
              }
            : undefined,
        ]}
      />
    </>
  );
};

export default Index;
const primary = {
  fontSize: 15,
  fontWeight: 400,
  color: "#000",
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      outline: "0px",
    },
    "&:hover fieldset": {
      borderColor: "#c75425",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#c75425",
    },
  },
};
