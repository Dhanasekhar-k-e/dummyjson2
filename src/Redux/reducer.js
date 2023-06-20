import { ADD, UPDATE, DELETE } from "./actionTypes";
import { loadData, saveData } from "./localStorage";

export const initState = {
  add: loadData("items") || []
};

export default (state = initState, { type, item }) => {
  console.log(type, item);
  switch (type) {
    case ADD:
      return {
        ...state
      };
    case UPDATE:
      return {
        ...state
      };
    case DELETE:
      let data = [...state.delet, item];
      saveData("tasks", data);
      return {
        ...state,
        delet: data
      };
    default:
      return state;
  }
};
