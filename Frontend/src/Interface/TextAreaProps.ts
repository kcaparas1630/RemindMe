import React from "react";

interface TextAreaProps {
    inputName: string;
    labelName: string;
    placeholder: string;
    value: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    // eslint-disable-next-line no-unused-vars
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    error?: boolean | undefined | string;
}

export default TextAreaProps;
