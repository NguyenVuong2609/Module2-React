import { combineReducers } from 'redux';
import listStudent from './listStudent';
import notify from './notify';

const reducer  = combineReducers({listStudent, notify});
export default reducer;