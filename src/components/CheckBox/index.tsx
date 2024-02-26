import { CheckboxProps } from "./interface";
import "./styles/index.scss";

export const CheckBox = ({ textLabel, name, checked, isValid, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center mb-4 ">
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        name={name}
        className={` checkbox checked:border-black w-6 h-6 rounded-md cursor-pointer border-3 ${isValid ? "border-gray-400" : "border-red-400"}`} />
      <label className={`ms-2 text-sm font-normal ${isValid ? "text-gray-900" : "text-red-400"}`}>
        {textLabel}
      </label>
    </div>
  )
}
