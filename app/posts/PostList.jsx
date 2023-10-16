import Link from 'next/link';
import React from 'react'
import DeleteButton from './DeleteButton'
import UpdateButton from './UpdateButton'
import { getBaseUrl } from '../util/baseUrl';

const PostList = async() => {
    
    const baseURL = getBaseUrl();
    const data = await fetch(`${baseURL}/api/posts`,{cache:"no-store"})
    const postsData = await data.json();
  return (
    <div className=" mt-24 flex flex-col justify-between items-center  bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Posts List</h1>
            <div className="w-full md:w-2/3 lg:w-1/2">
                <ul>
                    {postsData.map(post => (
                        <li key={post.id} className="mb-6 bg-white p-4 rounded-md shadow-lg">
                            <img src={post.url} alt={post.title} className="w-full h-64 object-cover rounded-md mb-4" />
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                                    <p className="text-gray-600">{post.content}</p>
                                </div>
                                <div>
                                    <DeleteButton id={post.id} />
                                    <UpdateButton id={post.id} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
  

export default PostList