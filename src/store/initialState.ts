export const initialState = {
  USER: {
    isLogged: false,
    names: "",
    nro_doc: "",
    phone: "",
    acceptPrivacity: false,
    acceptComunications: false,
    plan: {
      name: "",
      price: "",
    },
  },
  MODAL: {
    isOpen: false,
  },
  PLANS: {
    current: "",
    list: [],
  },
};
