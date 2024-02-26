"use client";

import { useRadioBtn } from './hooks';
import "./styles/index.scss";

interface Props {
  value: string;
}

export const RadioBtn = ({ value }: Props) => {
  const { currentPlan, toggleSetPlan } = useRadioBtn();

  return (
    <div className="flex items-center mb-4 ">
      <input
        type="radio"
        value={value}
        onClick={() => toggleSetPlan(value)}
        checked={currentPlan === value}
        className="radio-btn rounded-full w-6 h-6 text-blue-600 bg-white border-2 border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 " />
    </div>
  )
}
