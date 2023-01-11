import { useCallback, useState } from "react";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import { StyledMenu } from "./MoreActionsButton.style";
import { MORE_ACTIONS_LINKS } from "../../../constants";

const MoreActionsButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <Button
        aria-haspopup="true"
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {MORE_ACTIONS_LINKS.map((item) => (
          <MenuItem key={item.id} onClick={handleClose} disableRipple>
            {item.name}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default MoreActionsButton;
