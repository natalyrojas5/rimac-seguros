import { ChangeEvent } from "react";

export interface InputProps {
  type: string;
  name: string;
  textLabel: string;
  className?: string;
  value: string;
  isValid: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}
