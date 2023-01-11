import styled from "@emotion/styled";

export const ActionsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
});

export const TopLinks = styled("ul")({
  listStyleType: "none",
  padding: 0,
  display: "flex",
  justifyContent: "flex-end",
  minHeight: "40px",

  "& li": {
    "& a": {
      color: "#070723",
      textDecoration: "none",
      textTransform: "uppercase",
      fontSize: "14px",
    },
    "&:not(:first-of-type):before": {
      content: `"|"`,
      padding: "0 10px 0",
    },
  },
});
