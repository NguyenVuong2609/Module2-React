import './App.css';
import AddForm from './components/AddForm';
import ListStudent from './components/ListStudent';
import { useEffect } from 'react';
import * as db from './services/studentServices'
import * as types from './actions'
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    db.getStudent().then(res=> dispatch(types.act_get_data(res.data)))
  },[])
  return (
    <div className="App">
        <h2 className='header'>Student Management</h2>
        <div className='bodyContent col-12'>
        <AddForm/>
        <ListStudent/>
        </div>
    </div>
  );
}

export default App;
