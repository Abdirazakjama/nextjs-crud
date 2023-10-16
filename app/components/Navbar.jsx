
import Link from 'next/link'
import React from 'react'
// import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { aothOptions } from 'app/api/auth/[...nextauth]/aothOptions'
const Navbar = async() => {
  // const {data} = useSession()
  const data = await getServerSession(aothOptions)

  return (
    <div className='flex justify-around items-center bg-gray-100 shadow-md container'>
        <Link href='/posts'>Logo</Link>
        <ul className='space-x-2'>
            <Link href='/'>Home</Link>
            <Link href='/'>admin</Link>
            <Link href='/posts'>Posts</Link>
            <Link href='/contact'>Contact</Link>
        </ul>
        <div className='flex items-center space-x-4'> 
       
          {data ?<> <img className='w-10 h-10 rounded-full' 
          //@ts-ignore
          src={data.user.image} /> 
         <div> <span>welcome: <span className='font-bold'>
        
          {data.user.name}</span>
          </span> </div>
         <button className='bg-green-500 p-4 rounded-md'>Logout</button></ >
          :  <button className='bg-green-500 p-4 rounded-md'>Login</button>
        }
        </div>
    </div>
  )
}

export default Navbar