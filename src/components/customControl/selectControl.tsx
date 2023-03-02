import { MenuItem, Select } from '@mui/material';
import React from 'react'

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const SelectControl: React.FC = () => {

  return (
    <Select name={'country'}
      label="Select Field"
      variant="outlined">
      {options.map(({ value, label }, index) => (
        <MenuItem key={index} value={"value"}>
          {label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SelectControl