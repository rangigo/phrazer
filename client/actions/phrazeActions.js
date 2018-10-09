import * as actionTypes from "./actionTypes";

export const addPhraze = payload => ({
  type: actionTypes.ADD_PHRAZE,
  payload
});

export const editPhrase = payload => ({
  type: actionTypes.EDIT_PHRASE,
  payload
});

export const checkBoxPhraze = (key, opt) => ({
  type: actionTypes.CHECK_BOX_PHRAZE,
  key,
  opt
});

export const deletePhraze = payload => ({
  type: actionTypes.DELETE_PHRAZE,
  payload
});

export const getPhrazesByCategory = (payload) => ({
  type: actionTypes.GET_PHRAZES_BY_CATEGORY,
  payload: payload
})
