import React from "react"
import { TextField,MenuItem} from "@material-ui/core"
import {useField,useFormikContext} from "formik"

const DateTimePickerWrapper = ({name,options,...otherProps}) => {
  
   const [field,meta] = useField(name);
 
    const configDateTime = {
        type:'date',
        ...field,
        ...otherProps,
        fullWidth: true,
        InputLabelProps:{
            shrink:true
        },
        variant:'outlined',
    }

     if(meta && meta.touched && meta.error){
         configDateTime.error = true;
         configDateTime.helperText = meta.error;
     }

 
    return <TextField {...configDateTime}>
    </TextField>
}

export default DateTimePickerWrapper;