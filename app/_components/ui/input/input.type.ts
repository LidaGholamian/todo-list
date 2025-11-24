import React from 'react'
import {FieldErrors, UseFormRegisterReturn} from 'react-hook-form'

export type InputProps= {
  label?: string | React.ReactNode;
  name: string;
  type?: "text" | "password" | "email" | "number" | "tel";
  register?: UseFormRegisterReturn;
  errors?: FieldErrors;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  inputStyle?: string;
  min?: number;
  max?: number;
  rightElement?: React.ReactNode;
};
