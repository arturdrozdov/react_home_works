import { useEffect, useReducer, useState } from 'react';
import './App.css';
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import img7 from './img/img7.png'
import img8 from './img/img8.png'

const initState = {
  step: 1,
  firstStep: {
    name: '',
    surname: '',
    email: '',
  },
  secondStep: {
    city: '',
    street: '',
    houseNumber: '',
  },
  thirdStep: {
    img: 'data:image/png;base64,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'
  },
  foursStep: {
    pass: '',
    confirmPass: ''
  },
  fifthStep: {

  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return {
        ...state,
        step: state.step + 1
      }
      break;
    case 'PREV_STEP':
      return {
        ...state,
        step: state.step - 1
      }
      break;
    case 'CHANGE_ST1':
      return {
        ...state,
        firstStep: { ...state.firstStep, ...action.payload }
      }
      break;
    case 'CHANGE_ST2':
      return {
        ...state,
        secondStep: { ...state.secondStep, ...action.payload }
      }
      break;
    case 'CHANGE_ST3':
      return {
        ...state,
        thirdStep: { ...state.thirdStep, ...action.payload }
      }
      break;
    case 'CHANGE_ST4':
      return {
        ...state,
        foursStep: { ...state.foursStep, ...action.payload }
      }
      break;
    case 'CHANGE_ST5':
      return {
        ...state,
        foursStep: { ...state.fifthStep, ...action.payload }
      }
      break;

    default:
      break;
  }
}

const Step1 = ({ dispatch, values }) => {

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_ST1', payload: { [name]: value } })
  }

  return (
    <div className='inner inner1'>
      <label>Name
        <input value={values.name} type="text" name='name' onChange={handleChange} />
      </label>
      <label>Surname
        <input value={values.surname} type="text" name='surname' onChange={handleChange} />
      </label>
      <label>Email
        <input value={values.email} type="text" name='email' onChange={handleChange} />
      </label>
    </div>
  )
}
const Step2 = ({ dispatch, values }) => {
  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_ST2', payload: { [name]: value } })
  }
  return (
    <div className='inner inner2'>
      <label>City
        <input value={values.city} type="text" name='city' onChange={handleChange} />
      </label>
      <label>Street
        <input value={values.street} type="text" name='street' onChange={handleChange} />
      </label>
      <label>House number
        <input value={values.houseNumber} type="text" name='houseNumber' onChange={handleChange} />
      </label>
    </div>
  )
}
const Step3 = ({ dispatch, values }) => {

  const [imgUrl, setImgUrl] = useState(values);

  useEffect(() => {
    return () => dispatch({ type: 'CHANGE_ST3', payload: { img: imgUrl } });
  }, [imgUrl])

  const handleChange = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => setImgUrl(fileReader.result);
    fileReader.readAsDataURL(file);
  }
  const handleChange2 = (e) => {
    setImgUrl(e.target.src)
  }
  return (
    <div className='inner inner3'>
      <img src={imgUrl} alt="ava" />
      <input onChange={handleChange} type="file" accept='.jpg, .png, .jpeg' name='img' />
      <div className="cardImg-inner">
        <img src={img1} onClick={handleChange2} alt="pic" />
        <img src={img2} onClick={handleChange2} alt="pic" />
        <img src={img3} onClick={handleChange2} alt="pic" />
        <img src={img4} onClick={handleChange2} alt="pic" />
        <img src={img5} onClick={handleChange2} alt="pic" />
        <img src={img6} onClick={handleChange2} alt="pic" />
        <img src={img7} onClick={handleChange2} alt="pic" />
        <img src={img8} onClick={handleChange2} alt="pic" />

      </div>
    </div>
  )
}
const Step4 = ({ dispatch, values }) => {
  const handleChange = e => {
    const { name, value } = e.target;

    dispatch({ type: 'CHANGE_ST4', payload: { [name]: value } })
  }

  return (
    <div className='inner inner4'>
      <label>Password
        <input value={values.pass} onChange={handleChange} type="text" name='pass' />
      </label>
      <label>Confirm password
        <input value={values.confirmPass} onChange={handleChange} type="text" name='confirmPass' />
      </label>
      {values.pass.length>0 && values.pass === values.confirmPass ?  <h3>Pass the same</h3>:<h3>Enter the same passwords</h3> }

      
    </div>
  )
}
const Step5 = ({values}) => {
  return (
    <div className='inner inner5'>
      <img src={values.thirdStep.img} alt="" />
      <p>Name:{values.firstStep.name}</p>
      <p>Surname:{values.firstStep.surname}</p>
      <p>Email:{values.firstStep.email}</p>
      <p>City:{values.secondStep.city}</p>
      <p>Street:{values.secondStep.street}</p>
      <p>House:{values.secondStep.houseNumber}</p>
    </div>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const [isPassword, setIsPassword] = useState(true);


  useEffect(() => {
  if ((state.foursStep.pass && state.foursStep.confirmPass) && (state.foursStep.pass === state.foursStep.confirmPass)) {
    setIsPassword(false)
  } else setIsPassword(true);
  })

  const handleNextStep = () => dispatch({ type: 'NEXT_STEP' });
  const handlePrevStep = () => dispatch({ type: 'PREV_STEP' });
  const handleSubmit = (props) => {


  }
  return (
    <div className="App">
      <h3>Шаг: {state.step}</h3>
      <div className='main_section'>
        {state.step === 1 && <Step1 dispatch={dispatch} values={state.firstStep} />}
        {state.step === 2 && <Step2 dispatch={dispatch} values={state.secondStep} />}
        {state.step === 3 && <Step3 dispatch={dispatch} values={state.thirdStep.img} />}
        {state.step === 4 && <Step4 dispatch={dispatch} values={state.foursStep} />}
        {state.step === 5 && <Step5 values={state}/>}
      </div>
      <div className='bot_section'>
        {state.step > 1 && <button onClick={handlePrevStep}>Prev</button>}
        {state.step < 4 && <button onClick={handleNextStep}>Next</button>}
        {state.step === 4 && <button disabled={isPassword} onClick={handleNextStep}>Submit</button>}

      </div>
    </div>
  );
}

export default App;
