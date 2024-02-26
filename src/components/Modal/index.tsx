import { useContext } from "react";
import { TYPES } from "@/store";
import { RimacContext } from "@/context";
import { ModalProps } from "./interface";

import "./styles/index.scss";

export const Modal = ({ title, description }: ModalProps) => {
  const {
    state,
    dispatch
  } = useContext(RimacContext);

  const closeModal = () => {
    dispatch({
      type: TYPES.TOGGLE_MODAL,
      payload: false
    })
  }

  if (state?.MODAL.isOpen) {
    return (
      <div className="modal overflow-y-auto flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-2xl shadow ">
            <div className="flex items-center justify-between p-4 md:p-5  ">
              <h3 className="text-md font-semibold text-gray-900 ">
                {title}
              </h3>
              <button type="button" className="text-gray-400 bg-transparent  text-sm w-8  inline-flex justify-center items-center"
                onClick={closeModal}>
                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>
            <div className="px-4 pb-8">
              <p className="text-base text-gray-500 ">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
