import React from "react";
import {
  TextField,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import { useField, useFormikContext } from "formik";
const CheckboxWrapper = ({ name,label,legend, ...otherProps }) => {
  const [field, meta] = useField(name);
  const {setFieldValue} = useFormikContext();
  const handleChange = evt =>{
      const {checked} = evt.target;
      setFieldValue(name,checked)
  }
  const configTextField = {
      onChange:handleChange,
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }
  return (
    <FormControl>
      <FormLabel component="legend">{legend}</FormLabel>
        <FormGroup>
          <FormControlLabel label={label} control={<Checkbox {...configTextField}/>} />
        </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
