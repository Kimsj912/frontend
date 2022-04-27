import React from 'react';
import Styled from './Input.styled';

interface TextareaProps {
  rows?: number;

  width?: number;
  height?: number;
  fontColor?: string;
  borderColor?: string;
}

interface InputProps extends TextareaProps {
  type?: 'text' | 'textarea' | 'password';
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, placeholder, onChange, rows = 5 }) => {
  if (type == 'textarea')
    return <Styled.textarea defaultValue={value} placeholder={placeholder} onChange={onChange} rows={rows} />;
  return <Styled.input type={type} defaultValue={value} placeholder={placeholder} onChange={onChange} />;
};

export default Input;
