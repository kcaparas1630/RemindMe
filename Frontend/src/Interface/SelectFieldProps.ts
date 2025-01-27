import React from 'react';

export interface OptionProps {
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: OptionProps[];
  inputName: string;
  labelName: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: boolean | undefined | string;
}

export default SelectFieldProps;
