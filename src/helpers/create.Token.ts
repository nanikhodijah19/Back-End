import { sign } from "jsonwebtoken"

export interface Ipayload{
    id:number;
    role:string;
}

const key = process.env.SECRET_KEY || ""

export const createToken = (payload : Ipayload) => {
    const token = sign (payload , key, {expiresIn: '5m'})
    return token 
}