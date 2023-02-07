import {ADD_STUDENT, GET_DATA} from '../constants/actionType'

export const act_get_data = (data)=> {
    return {
        type: GET_DATA,
        payload: data
    }
}
export const act_add_student = (data)=> {
    return {
        type: ADD_STUDENT,
        payload: data
    }
}