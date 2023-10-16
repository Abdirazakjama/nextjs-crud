import { NextResponse } from "next/server";
import postsShcema from "./schema";
import prisma from "prisma/client";
import exp from "constants";


export const GET = async ()=>{
    const postInfo = await prisma.post.findMany()
    return NextResponse.json(postInfo)
}


export async function POST(request) {


  try {
      const body = await request.json();

      const validation = postsShcema.safeParse(body);

      if (validation.success) {

          // const registerUser = await prisma.user.create({
          //     data: body
          // });

          const registerpost = await prisma.post.create({
              data: {
                content:validation.data.content,
                url:validation.data.url,
                title:validation.data.title
              }
          });

          return NextResponse.json({ message: registerpost }, { status: 200, });
      } else {
          // @ts-ignore
          return NextResponse.json({ message: validation.error.errors }, { status: 400, });
      }
  } catch (err) {
      return NextResponse.json({ message: err.message }, { status: 400, });
  }


};

  