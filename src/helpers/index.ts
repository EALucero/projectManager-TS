import { Response }  from 'express';
import { Types } from 'mongoose';
import jwt from 'jsonwebtoken';

export const errorResponse = (res: Response, error: any, origin: string) => {
    return res.status(error.status || 500).json({ 
        ok : false, 
        msg : error instanceof Error ? error.message : 'Upss, hubo un error en ${origin}' 
    }) 
}

export const generateTokenRandom = () => {
    const random = Math.random().toString(32).substring(2);
    const date = Date.now().toString(32);
    return random + date
}

export interface UserPayload {
    id: Types.ObjectId
}

export const generateJWT = (payload : UserPayload) => jwt.sign(payload, process.env.JWT_SECRET as string,{
    expiresIn : '1h'
})