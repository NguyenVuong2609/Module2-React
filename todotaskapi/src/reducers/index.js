import { combineReducers } from 'redux';
import listTask from './listTask';
import notify from './notify';

const reducer  = combineReducers({listTask, notify});
export default reducer;