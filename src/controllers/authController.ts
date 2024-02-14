import { Request, Response } from "express";
import { errorResponse } from "../helpers";


export const register = async (req: Request, res: Response) => {
    try {
        if (true) throw "ALGO..."
        return res.status(201).json({
            ok: true,
            msg: 'Usuario Registrado'
        })
    } catch (error) {
        errorResponse(res, error, "REGISTER")
    }
}

export const login = async (req: Request, res: Response) => {
    try {

        return res.status(200).json({
            ok: true,
            msg: 'Usuario Logueado'
        })
    } catch (error) {
        errorResponse(res, error, "LOGIN")
    }
}


export const checked = async (req: Request, res: Response) => {
    try {
        return res.status(201).json({
            ok: true,
            msg: 'Usuario Chequeado'
        })
    } catch (error) {
        errorResponse(res, error, "CHECKED")
    }
}
export const sendToken = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Token enviado'
        })
    } catch (error) {
        errorResponse(res, error, "SEND-TOKEN")
    }
}
export const verifyToken = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Token verificado'
        })
    } catch (error) {
        errorResponse(res, error, "VERIFY-TOKEN")
    }
}
export const changePassword = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Password actualizado'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en CHANGE-PASSWORD'
        })
    }
}