import { z } from 'zod'


const postsShcema = z.object({
    title:z.string().min(3).max(20),
    content:z.string().min(3).max(200),
    url:z.string()
})

export default postsShcema;