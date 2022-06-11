import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {Add , Sub} from "./store/action"

function App() {
const [count , setcount] = useState(0)
const dispatch = useDispatch();


const state = useSelector((state) => state.count);

  return (
    <div className="App">
      
     <h1> Counter App : {count} </h1>
     <div>
       <button onClick={() => dispatch(Add())}>Add</button>
       <button onClick={() => dispatch(Sub())}>Reduce</button>
    
     </div>
    </div>
  );
}

export default App;
