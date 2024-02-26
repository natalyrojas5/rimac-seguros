export const TYPES = {
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SET_PLANS: "SET_PLANS",
  SET_PLAN: "SET_PLAN",
  SET_USER: "SET_USER",
};

interface SetPlans {
  type: "SET_PLANS";
  payload: Plans;
}

interface SetUser {
  type: "SET_USER";
  payload: any;
}

interface SetCurrentPlan {
  type: "SET_PLAN";
  payload: "PEOPLE" | "PERSON";
}

interface Plans {
  list: List[];
}

interface List {
  name: string;
  price: number;
  description: string[];
  age: number;
}

interface ToggleModal {
  type: "TOGGLE_MODAL";
  payload: boolean;
}

export type ACTION = ToggleModal | SetPlans | SetCurrentPlan | SetUser;
