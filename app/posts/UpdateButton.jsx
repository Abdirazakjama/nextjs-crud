"use client"
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';

const UpdateButton = ({id}) => {
    const [transition, startTransition] = useTransition();

    const router = useRouter();
    const handleUpdate = async (id) => {



        router.push(`/posts/${id}`)

        // const data = await fetch(`http://localhost:3000/api/posts/${id}`, {
        //     method: 'PUT',
            
        //     data: {
        //         content:validation.data.content,
        //         url:validation.data.url,
        //         title:validation.data.title
        //       }
        // });


        startTransition(() => router.refresh());


    };
  return (
    <div>
       <button
        onClick={() => handleUpdate(id)}
        type="submit" className=" bg-indigo-700 py-2 px-4 rounded-md text-white">
        Update
    </button>
    </div>
  )
}

export default UpdateButton
