import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

//la peticion de la autentificacion entrará acá
const handler = NextAuth({
    //definir la cantidad de proveedores de inicio de sesion
    providers:[GoogleProvider({
        //parametros requeridos para la autentificacion (los valores se encuentran en las variables de entorno)
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })]
})

export {handler as GET, handler as POST}
