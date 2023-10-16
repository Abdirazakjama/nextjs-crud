

import PostEskeleton from '../components/PostEskeleton'

import { Suspense } from 'react'
import PostList from './PostList'

export const dynamic = 'force-dynamic';

const postspage = () => {
  return (
    <div>
      <h1 className='texr-3xl font-bold'>posts Page</h1>
      
      {/* <Suspense fallback={<PostEskeleton />}> */}
      <PostList />
      {/* </Suspense> */}
    </div>
  )
}

export default postspage