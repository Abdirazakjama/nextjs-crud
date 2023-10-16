import React, { Suspense } from 'react'
import Upload from './Upload'
import Edit from './Edit'
import { getBaseUrl } from '../../util/baseUrl';

export const dynamic = 'force-dynamic';

const page = async({params}) => {
  const baseURL = getBaseUrl();

  const data = await fetch(`${baseURL}/api/posts/${params.id}`)
  const post = data.ok?  await data.json()  :""


  return (
    <div>

      <Suspense fallback={<p>post info page</p>}>
      </Suspense>

      {/* <Upload    /> */}
      <Edit  post={post} />
          
    </div>
  )
}

export default page
