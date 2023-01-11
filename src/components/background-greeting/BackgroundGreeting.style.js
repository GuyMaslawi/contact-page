import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BackgroundGreetingWrapper = styled("div")({
  backgroundColor: "rgb(7, 7, 35)",
  backgroundImage:
    'url("https://cymulate.com/wp-content/uploads/2021/09/hero-5.png")',
  width: "100%",
  minHeight: "31.3vw",
  height: "auto",
  maxHeight: "65vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#fff",
  marginTop: "110px",
  overflow: "hidden",
  position: "relative",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: 0,
  padding: "30px",
});

export const DemoRequest = styled("div")({
  display: "flex",
  flexDirection: "column",

  "& h1": {
    fontSize: "48px",
    marginBlockEnd: "20px",
  },

  "& h3": {
    fontSize: "16px",
    lineHeight: "24px",
  },
});

export const ButtonStyle = styled(Button)({
  backgroundColor: "transparent",
  border: "1px solid #fff",
  padding: "0 40px",
  height: "63px",
  borderRadius: "25px",
  marginBlockStart: "20px",
  color: "#fff",

  "&:hover": {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    color: "#0e54c4",
  },
});
