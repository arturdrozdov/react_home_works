import { useReducer } from 'react';
import './App.css';

const initState={
  step:1,
  firstStep:{
    name: '',
    surname: '',
    email: '',
  },
  secondStep:{
    city:'',
    street:'',
    houseNumber:'',
  },
  thirdStep:{
    img:''
  },
  foursStep:{
    pass:'',
    confirmPass:''
  },
  fifthStep:{

  }
}

const reducer=(state, action)=>{
  switch (action.type) {
    case 'NEXT_STEP':
      return{
        ...state,
        step: state.step+1
      }
      break;
    case 'PREV_STEP':
      return{
        ...state,
        step: state.step-1
      }
      break;
    case 'CHANGE_ST1':
      return{
        ...state,
        firstStep:{...state.firstStep, ...action.payload}
      }
      break;
    case 'CHANGE_ST2':
      return{
        ...state,
        secondStep: {...state.secondStep, ...action.payload}
      }
      break;
    case 'CHANGE_ST3':
      return{
        ...state,
        step: state.step-1
      }
      break;
    case 'CHANGE_ST4':
      return{
        ...state,
        step: state.step-1
      }
      break;
    case 'CHANGE_ST5':
      return{
        ...state,
        step: state.step-1
      }
      break;
  
    default:
      break;
  }
}

const Step1=({dispatch, values})=>{

  const handleChange=e=>{
    const {name, value}=e.target;
    dispatch({type: 'CHANGE_ST1', payload:{[name] : value}})
  }

  return(
    <div className='inner inner1'>
      <label>Name
        <input value={values.name} type="text" name='name' onChange={handleChange}/>
      </label>
      <label>Surname
      <input value={values.surname} type="text" name='surname' onChange={handleChange}/>
      </label>
      <label>Email
      <input value={values.email} type="text" name='email' onChange={handleChange}/>
      </label>
    </div>
  )
}
const Step2=()=>{
  return(
    <div className='inner inner2'>
      <label>City
        <input type="text" name='city' />
      </label>
      <label>Street
      <input type="text" name='street' />
      </label>
      <label>House number
      <input type="text" name='houseNumber' />
      </label>
    </div>
  )
}
const Step3=()=>{
  return(
    <div className='inner inner3'>
      <img src="" alt="" />
      <input type="file" accept='.jpg, .png, .jpeg' name='img'/>
    </div>
  )
}
const Step4=()=>{
  return(
    <div className='inner inner4'>
      <label>Password
        <input type="password" name='password' />
      </label>
      <label>Confirm password
      <input type="password" name='confirm' />
      </label>
      </div>
  )
}
const Step5=()=>{
  return(
    <div className='inner inner5'>
     <img src="" alt="" />
     <p>Name</p>
     <p>Surname</p>
     <p>Email</p>
     <p>City</p>
     <p>Street</p>
     <p>House number</p>
    </div>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  const handleNextStep=()=>dispatch({type: 'NEXT_STEP'});
  const handlePrevStep=()=>dispatch({type: 'PREV_STEP'});

  return (
    <div className="App">
      <h3>Шаг: {state.step}</h3>
      <div className='main_section'>
        {state.step===1 && <Step1 dispatch={dispatch} values={state.firstStep}/>}
        {state.step===2 && <Step2/>}
        {state.step===3 && <Step3/>}
        {state.step===4 && <Step4/>}
        {state.step===5 && <Step5/>}
      </div>
      <div className='bot_section'>
        {state.step>1 && <button onClick={handlePrevStep}>Prev</button>}
        {state.step<5 && <button onClick={handleNextStep}>Next</button>}
        {state.step===5 && <button>Submit</button>}

      </div>
    </div>
  );
}

export default App;
