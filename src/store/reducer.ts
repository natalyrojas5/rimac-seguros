import { ACTION, TYPES } from "./types";

export const reducer = (state: any, action: ACTION) => {
  switch (action.type) {
    case TYPES.TOGGLE_MODAL: {
      return {
        ...state,
        MODAL: {
          isOpen: action.payload,
        },
      };
    }



    case TYPES.SET_PLANS: {
      return {
        ...state,
        PLANS: {
          ...state.PLANS,
          list: action.payload,
        },
      };
    }

    case TYPES.SET_PLAN: {
      return {
        ...state,
        PLANS: {
          ...state.PLANS,
          current: action.payload,
        },
      };
    }

    case TYPES.SET_USER: {
      return {
        ...state,
        USER: {
          ...state.USER,
          ...{ ...action.payload },
        },
      };
    }

    default:
      return state;
  }
};
