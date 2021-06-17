import React, { useState } from 'react';
import './App.css';
import { userData } from './userData';

function App() {

  const [state, setState] = useState(userData);


  const handleSearch = e => {

    const { value } = e.target;
    const result = userData.filter(item => item.name.includes(value));
    
    setState(result);
  }

  const sort = e => {
    console.log(e.target.value);
    const { value } = e.target;

    const result = [...state];

    if (value === 'asc') {
      result.sort(function (a, b) {
        return a.age - b.age;
      })
    }
    if (value === 'desc') {
      result.sort(function (a, b) {
        return b.age - a.age;
      })
    }
    setState(result)
  }

  const reset = e =>{
    document.querySelector('.input').value='';
    document.querySelector('.select').value='default';
    setState(userData)
  }

  



  return (
    <div className="App">
      <input className="input" type="text" placeholder='Search' onChange={handleSearch} />
      <select className='select' name="select" onChange={sort}>
        <option className="defaultOpt" value="default" selected disabled hidden>Сортировка</option>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
      <button type='button' onClick={reset}>reset</button>
      <div className="wrapper">

        {state.map(item => <Card data={item} />)}
      </div>
    </div>
  );
}

const ModalInner=(props)=>{
  return(
  
    <div className="modal">
    <div className="modal__inner">

    <span>{props.data.name}</span>
    <span>{props.data.company}</span>
    <span>{props.data.balance}</span>
    <span>{props.data.address}</span>
    <span>{props.data.age}</span>
    <span>{props.data.email}</span>
    <span>{props.data.eyeColor}</span>
    <span>{props.data.favoriteFruit}</span>
   </div>
    </div>
   
  )
}

const Card = (props) => {
const [isShowModal,setIsShowModal]=useState(false);




  return (
    
    <div className='card' onClick={(e)=>{setIsShowModal(!isShowModal)}}>
      {isShowModal && 
      <ModalInner data={props.data}/>
        }
     
      <img src='https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_placeholder-512.png' alt='#'/>
      <span>{props.data.name}</span>
      <span>{props.data.age}</span>
      <span>{props.data.gender}</span>
      <span>{props.data.balance}</span>
    </div>
  )

}

export default App;