import { Wrapper, Img } from "./Headers.style";
import Logo from "../../assets/logo.png";
import Nav from "../nav/Nav";
import Actions from "./actions/Actions";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={2} container alignItems="end">
          <Img src={Logo} alt="company logo" />
        </Grid>
        <Grid item xs container alignItems="center">
          <Nav />
        </Grid>
        <Grid item xs={3}>
          <Actions />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Header;
