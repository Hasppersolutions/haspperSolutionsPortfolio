import { Box } from "@mui/material";
import React from "react";
import line from "../assets/img/line.svg";

const WaveLine = () => {
  return (
    <>
      <Box
        sx={{
          py: { xs: "30px", sm: "70px" },
          width: "100%",
          display: "inline-block",
        }}
      >
        <Box
          className="animate-line"
          sx={{
            width: "100%",
            height: 49,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: { xs: `url(${line})`, xl: "none" },
          }}
        >
          <img
            src={line}
            alt="Wave line"
            style={{
              width: "100%",
              objectFit: "fill",
              opacity: 0,
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default WaveLine;
