import {
  ADD_TO_DO_LIST,
  UPDATE_TO_DO_LIST,
  DELETE_TO_DO_LIST,
  TO_DO_LIST,
  UPDATE_TO_DO_MODAL
} from './const'

export const profileListView = (data) => ({
  type: TO_DO_LIST,
  payload: data
});
export const addprofileList = (data) => ({
  type: ADD_TO_DO_LIST,
  payload: data
});
export const updateprofileList = (data) => ({
  type: UPDATE_TO_DO_LIST,
  payload: data
});
export const deleteprofileList = (data) => ({
  type: DELETE_TO_DO_LIST,
  payload: data
});
export const showUpdateprofileModal = (data) =>({
  type :UPDATE_TO_DO_MODAL,
  payload : data
})

