import React from 'react'

const layout = ({Children}) => {
  return (
    <div>
      
      <nav>
        <ul className='flex justify-between items-center bg-slate-500'>
            <li>home</li>
            <li>abdirisaq</li>
        </ul> 
       
      </nav>
      {Children}
    </div>
  )
}

export default layout
