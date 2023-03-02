import React from 'react';
import { useField, useFormikContext } from 'formik';
import { MenuItem, TextField } from '@mui/material';
import { ISelectionFieldProps } from '../models/interfaceModels';


const SelectWrapper: React.FC<ISelectionFieldProps> = ({
  name,
  label,
  options,
  ...otherProps
}: ISelectionFieldProps) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect: any = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {options.map((item, pos) => {
        return (
          <MenuItem key={pos} value={item.value}>
            {item.label}
          </MenuItem>
        )
      })}
    </TextField>
  );
};

export default SelectWrapper;
