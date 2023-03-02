import React from 'react';

import { useField } from 'formik';
import { TextField } from '@mui/material';
import { IFieldProps } from '../models/interfaceModels';

const TextfieldWrapper: React.FC<IFieldProps> = ({
  name, ...rest
}: IFieldProps) => {

  const [field, mata] = useField(name);

  const configTextfield: any = {
    ...field,
    ...rest,
    fullWidth: true,
    variant: 'outlined'
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField {...configTextfield} />
  )
}

export default TextfieldWrapper;
