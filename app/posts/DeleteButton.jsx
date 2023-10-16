"use client";
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';
import { getBaseUrl } from '../util/baseUrl';


const DeleteButton = ({ id }) => {

    const [transition, startTransition] = useTransition();

    const router = useRouter();
    const baseURL = getBaseUrl();

    const handleDelete = async (id) => {
        const data = await fetch(`${baseURL}/api/posts/${id}`, {
            method: 'DELETE'
        });
        startTransition(() => router.refresh());
    };
    



  return (
    <div className='flex justify-between items-center space-x-2'>
    <button
        onClick={() => handleDelete(id)}
        type="submit" className=" bg-red-700 py-2 px-4 rounded-md text-white">
        Delete
    </button>
  
</div>
  )
}

export default DeleteButton
