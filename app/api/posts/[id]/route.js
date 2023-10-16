import { NextResponse } from "next/server"
import prisma from "prisma/client"
import postsShcema from "../schema"



  export const GET = async(req, {params}) =>{

   const postsinfo = await prisma.post.findUnique({ where: {id:params.id}})
   

    return NextResponse.json(postsinfo)
  }

  export const DELETE = async(req,{params}) =>{
    const deletepost = await prisma.post.delete({where:{id:params.id}})
    return NextResponse.json(deletepost)
  }

  export async function PUT(request,{params}) {


    try {
        const body = await request.json();
  
        const validation = postsShcema.safeParse(body);
  
        if (validation.success) {
  
            // const registerUser = await prisma.user.create({
            //     data: body
            // });
  
            const updatepost = await prisma.post.update({
              where:{id:params.id},
                data: {
                  content:validation.data.content,
                  url:validation.data.url,
                  title:validation.data.title
                }
            });
  
            return NextResponse.json({ message: updatepost }, { status: 200, });
        } else {
            // @ts-ignore
            return NextResponse.json({ message: validation.error.errors }, { status: 400, });
        }
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400, });
    }
  
  
  };