import { createContext, useReducer } from "react";
import { reducer, initialState } from "@/store";
import { Context } from "./interface";

interface Props {
  children: React.ReactNode
}

export const RimacContext = createContext<Context>({ state: {}, dispatch: () => { } });

const init = (props: any) => {
  if (typeof localStorage === "undefined") return;
  const localStorageUser = localStorage.getItem('user');

  if (localStorageUser) {
    return {
      ...props,
      USER: {
        ...props.USER,
        ...JSON.parse(localStorageUser)
      }
    }
  } else {
    return {
      ...props,
      USER: {
        isLogged: false
      }
    }
  }
}

export const RimacProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <RimacContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </RimacContext.Provider>
  );
};