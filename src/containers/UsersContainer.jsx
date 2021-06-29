import React from 'react';
import UserCard from '../components/UserCard';
const Users=()=>{
    return(
        <div className='usersContainer'>
            <input type="text" placeholder='Enter the name...'/>
            <div className='userCards'>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
            </div>
        </div>
    )
}

export default Users;