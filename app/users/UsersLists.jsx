import React from 'react'

const UsersLists = async() => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await fetch("http://localhost:3000/api/users")
    const users = await data.json();
  return (
    <div>
        <p className='text-3xl font-bold'>users list</p>
        {
            users.map(user =>(
               <p key={user.id}> {user.username} </p>
            ))
        }
      
    </div>
  )
}

export default UsersLists
