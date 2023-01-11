import styled from "@emotion/styled";

export const EmployeeCardWrapper = styled("div")({
  backgroundColor: "#fff",
  borderRadius: "16px",
  borderBottom: "14px solid #0e54c4",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBlockEnd: "20px",
});

export const Img = styled("img")({
  width: "118px",
  height: "118px",
  marginBlockStart: "-30px",
});

export const FirstName = styled("p")({
  fontSize: "19px",
  fontWeight: 700,
  margin: "18px 0 0",
});

export const Role = styled("p")({
  fontSize: "18px",
  fontWeight: 400,
  margin: "18px 0 0",
});
