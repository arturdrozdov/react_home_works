import React from 'react';

const UserCard = ({ data }) => {
    return (
        <div className='card'>
            <p>ID: 12345</p>
            <p>Name: Kyky Petrovich</p>
            <p>Time: 03:12</p>
            <button>Delete</button>
        </div>
    )
}
export default UserCard;