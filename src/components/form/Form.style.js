import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const FormWrapper = styled("div")({
  padding: "40px",
  backgroundColor: "#fff",
  maxWidth: "100%",
  width: "400px",
  borderRadius: "25px",
  position: "absolute",
  right: "40px",
  top: "40px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
});

export const SubmitButton = styled(Button)({
  width: "153px",
  height: "47px",
  backgroundColor: "#0e54c4",
  fontSize: "16px",
  borderRadius: "25px",
  color: "#fff",
  marginBlockStart: "20px",
});
