import { CHANGE_NOTIFY } from "../constants/actionType";
import { NOTIFY_READY } from "../constants/messageNotify";
const initialState = NOTIFY_READY;

const notify = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NOTIFY:
      return action.payload;
    default:
      return state;
  }
};
export default notify;