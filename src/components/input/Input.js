import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const Input = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField {...field} />}
    />
  );
};

export default Input;
