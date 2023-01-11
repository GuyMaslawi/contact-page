import styled from "@emotion/styled";

export const Wrapper = styled("nav")({
  width: "100%",

  "& ul": {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBlockStart: "40px",

    "& li": {
      "& a": {
        display: "block",
        color: "#070723",
        fontSize: "16px",
        textDecoration: "none",
      },
    },
  },
});
