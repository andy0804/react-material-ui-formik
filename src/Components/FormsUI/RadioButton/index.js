

import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { useField, useFormikContext } from "formik";
const RadioButtonWrapper = ({ ariaLabel, name,label,legend, ...otherProps }) => {
  const [field, meta] = useField(name);
  const {setFieldValue} = useFormikContext();
  const handleChange = evt =>{
      console.log('event',evt)
      const {value} = evt.target;
      setFieldValue(name,value)
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
    <FormControl component="fieldset">
    <FormLabel component="legend">{legend}</FormLabel>
    <RadioGroup aria-label={ariaLabel} name={name} onChange={handleChange}>
      <FormControlLabel  {...configTextField} value="female" control={<Radio />} label="Female" />
      <FormControlLabel  {...configTextField} value="male" control={<Radio />} label="Male" />
      <FormControlLabel  {...configTextField} value="other" control={<Radio />} label="Other" />
    </RadioGroup>
    </FormControl>

  );
};





export default RadioButtonWrapper;
