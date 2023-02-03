import { useEffect } from 'react';
import './App.css';
import ListTask from './components/ListTask';
import { getTask } from './services/taskServices';
import { useDispatch } from 'react-redux';
import * as types from './actions';
import * as db from './services/taskServices'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    db.getTask().then(res=> dispatch(types.act_get_data(res.data)));
  },[]);
  return (
    <div className="App">
      <h1 className='header'>To Do List</h1>
      <ListTask/>
    </div>
  );
}

export default App;
