export interface ButtonProps {
  btnStyle: "link" | "button" | "link-light";
  type: "button" | "submit";
  text: string;
  className?: string;
  onClick: () => void;
}