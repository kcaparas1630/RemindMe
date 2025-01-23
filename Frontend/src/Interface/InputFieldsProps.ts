import React from "react";

interface InputFieldProps {
    type: string;
    inputName: string;
    labelName: string;
    placeholder: string;
    value: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // eslint-disable-next-line no-unused-vars
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    error?: boolean | undefined | string;
}

export default InputFieldProps;
