import React,{useState} from 'react';
import './App.css';
import Ex1 from './exercise/ex1'
import Ex2 from './exercise/ex2'

function App() {
  const [btnText, setText] = useState("Exercise2");

  const changeText = () => {
    btnText === "Exercise2" ? setText("Exercise1") : setText("Exercise2");
  };

  return (
    <div className="App">
      <button type="button" onClick={() => changeText()} className='btn'>
        {btnText}
      </button>
      {btnText==='Exercise2' && <Ex1/> }
      {btnText==='Exercise1' && <Ex2/> }
    </div>
  );
}

export default App;
