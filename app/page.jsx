import Image from 'next/image'
import PostList from './posts/PostList'
import UsersLists from './users/UsersLists'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic';
export default function Home() {
  return (
    <main>
      {/* <Suspense fallback={<p>loading users</p>}>
      <UsersLists />
      </Suspense> */}
      
      <Suspense fallback={<p>posts loading</p>}>
      <PostList />
      </Suspense>
    </main>
  )
}
