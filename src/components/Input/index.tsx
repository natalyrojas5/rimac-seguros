import { InputProps } from "./interface";

export const Input = ({ textLabel, type, className, name, value, isValid, onChange }: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        className={`
        bg-white block border-2 pb-2.5 px-4 pt-5 w-full text-sm text-gray-500  appearance-none  focus:outline-none focus:ring-0 
        focus:border-gray-900 peer rounded-lg
        ${className}
        ${isValid ? "border-gray-400" : "border-red-400 "}`}
        placeholder=""
      />

      <p
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
        {textLabel}
      </p>
    </div>
  )
}
