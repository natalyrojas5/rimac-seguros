import { ChangeEvent } from "react";

export interface CheckboxProps {
  textLabel: string;
  name: string;
  checked: boolean;
  isValid?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
