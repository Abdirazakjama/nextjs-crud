import Gooleprovider from "next-auth/providers/google"
import { getProviders } from "next-auth/react"

export const aothOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers:[
        Gooleprovider({
           clientId: process.env.GOOGLE_Client_ID,
             clientSecret: process.env.GOOGLE_Client_secret,
        })
    ]
}