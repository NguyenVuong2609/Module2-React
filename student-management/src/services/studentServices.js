import axios from '../utils/baseAxios';
const baseUrl = "student";
const getStudent = async ()=> {
    return await axios.get(`${baseUrl}`);
};
const postStudent = async (data)=> {
    return await axios.post(`${baseUrl}`,data);
};
const deleteStudent = async (id)=> {
    return await axios.delete(`${baseUrl}/${id}`);
};
const updateStudent = async (id,student)=> {
    return await axios.put(`${baseUrl}/${id}`, student);
};
export {getStudent, postStudent, deleteStudent, updateStudent};