import React from 'react';

const Registration = () => {
    return(
       <div className='registratoin__wrap'>
            <h3>Registration</h3>
            <form>
                <label>Name</label>
                <input type="text" name='name' />
                <label>Surname</label>
                <input type="text" name='surname' />
                <button type='submit'>Registrate</button>
            </form>
       </div>
    )
}

const Timer = () =>{
    return(
        <>
        <h3>Participant</h3>
            <div>
                <h5>ID: 03:02</h5>
                <h5>Participant: Kyky Petya</h5>
                <h3>Time: 03:02</h3>
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
                <hr />
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </>
    )
}

const NewPlayer = () => {
    return (
        <div className='newPlayer'>
            {/* <Registration/> */}
            <Timer/>
            
        </div>
    )
}
export default NewPlayer;