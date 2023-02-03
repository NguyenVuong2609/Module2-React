import axios from '../utils/baseAxios';
const baseUrl = "toDoTask";
const getTask = async ()=> {
    return await axios.get(`${baseUrl}`);
};
const postTask = async (data)=> {
    return await axios.post(`${baseUrl}`,data);
};
const deleteTask = async (id)=> {
    return await axios.delete(`${baseUrl}/${id}`);
};
const updateTaskName = async (id,task)=> {
    return await axios.put(`${baseUrl}/${id}`, task);
};
const updateTaskStatus = async (id,task)=> {
    return await axios.put(`${baseUrl}/${id}`, task);
};
export {getTask, postTask, deleteTask, updateTaskName, updateTaskStatus};