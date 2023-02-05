import { ADD_TASK, UPDATE_NAME, UPDATE_STATUS, DELETE_TASK, CHANGE_NOTIFY, GET_DATA } from "../constants/actionType";

export const act_add_task = (name, status) => {
    return {
        type: ADD_TASK,
        payload: {name,status}
    };
};
export const act_update_name = (id , task) => {
    return {
        type: UPDATE_NAME,
        payload: {id, task}
    };
};
export const act_update_status = (id , task) => {
    return {
        type: UPDATE_STATUS,
        payload: {id, task}
    };
};
export const act_delete_task = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    };
};
export const act_change_notify = (message)=> {
    return {
        type: CHANGE_NOTIFY,
        payload: message
    };
};
export const act_get_data = (data)=> {
    return {
        type: GET_DATA,
        payload: data
    }
}