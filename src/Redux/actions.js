import { ADD, UPDATE, DELETE } from "./actionTypes";

// action creators

export const add = (payload) => ({
  type: ADD,
  payload
});

export const update = (payload) => ({
  type: UPDATE,
  payload
});

export const delet = (payload) => ({
  type: DELETE,
  payload
});
