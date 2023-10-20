export { default } from "next-auth/middleware"
//este archivo debe llevar este nombre por obligacion
export const config = { 
    //lista de ruts protegidas con el middleware
    matcher: ["/dashboard"] }