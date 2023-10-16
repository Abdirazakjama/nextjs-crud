import NextAuth from "next-auth"
import { aothOptions } from "./aothOptions"



const handler = NextAuth(aothOptions)

export { handler as GET, handler as POST }