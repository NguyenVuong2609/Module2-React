import {
  ADD_TASK,
  UPDATE_NAME,
  UPDATE_STATUS,
  DELETE_TASK,
  GET_DATA,
} from "../constants/actionType";
import * as db from "../services/taskServices";

let initialState = [];

const listTask = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      state = action.payload;
      return state;
    case ADD_TASK:
      db.postTask(action.payload);
      return state;
    case DELETE_TASK:
      db.deleteTask(action.payload);
      return state;
    case UPDATE_STATUS:
      db.updateTaskStatus(action.payload.id,action.payload.task);
      return state;
      case UPDATE_NAME:
        db.updateTaskName(action.payload.id,action.payload.task);
        return state;
    default:
      return state;
  }
};
export default listTask;
