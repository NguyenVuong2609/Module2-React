import { GET_DATA, ADD_STUDENT } from "../constants/actionType";
import * as db from '../services/studentServices';

let initialState = [];
const listStudent = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      state = action.payload;
      return state;
    case ADD_STUDENT:
      db.postStudent(action.payload);
      return state;
    default:
      return state;
  }
};
export default listStudent;
