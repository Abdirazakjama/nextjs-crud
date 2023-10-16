import { NextResponse } from "next/server";

import prisma from "../../prisma/client";
import userschema from "./Schema";


export const GET = async (req)=>{
   const userInfo = await prisma.user.findMany();

    return NextResponse.json(userInfo)
}

export async function POST(request, { params }) {


    try {
        const body = await request.json();

        const validation =userschema.safeParse(body);

        if (validation.success) {

            // const registerUser = await prisma.user.create({
            //     data: body
            // });

            const registerUser = await prisma.user.create({
                data: body
            });

            return NextResponse.json({ message: registerUser }, { status: 200, });
        } else {
            // @ts-ignore
            return NextResponse.json({ message: validation.error.errors }, { status: 400, });
        }
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 400, });
    }


};