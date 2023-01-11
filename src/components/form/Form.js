import { Grid, TextField, Select } from "@mui/material";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import { CONTACT_US_FIELDS } from "../constants";
import { FormWrapper, SubmitButton } from "./Form.style";

const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      companyName: "",
      businessEmail: "",
      selectCountry: "",
      message: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {CONTACT_US_FIELDS.map((item) => (
            <Grid item xs={12} sm={item.size} key={item.id}>
              {item.select ? (
                <Select label={item.displayText}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              ) : (
                <TextField
                  name={item.name}
                  control={control}
                  placeholder={item.displayText}
                  multiline={item.multiline}
                  fullWidth
                />
              )}
            </Grid>
          ))}
        </Grid>
        <SubmitButton type="submit">Get in Touch</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default Form;
