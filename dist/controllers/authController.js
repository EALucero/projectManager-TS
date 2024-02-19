"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.verifyToken = exports.sendToken = exports.checked = exports.login = exports.register = void 0;
const helpers_1 = require("../helpers");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (true)
            throw "ALGO...";
        return res.status(201).json({
            ok: true,
            msg: 'Usuario Registrado'
        });
    }
    catch (error) {
        (0, helpers_1.errorResponse)(res, error, "REGISTER");
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Usuario Logueado'
        });
    }
    catch (error) {
        (0, helpers_1.errorResponse)(res, error, "LOGIN");
    }
});
exports.login = login;
const checked = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(201).json({
            ok: true,
            msg: 'Usuario Chequeado'
        });
    }
    catch (error) {
        (0, helpers_1.errorResponse)(res, error, "CHECKED");
    }
});
exports.checked = checked;
const sendToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Token enviado'
        });
    }
    catch (error) {
        (0, helpers_1.errorResponse)(res, error, "SEND-TOKEN");
    }
});
exports.sendToken = sendToken;
const verifyToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Token verificado'
        });
    }
    catch (error) {
        (0, helpers_1.errorResponse)(res, error, "VERIFY-TOKEN");
    }
});
exports.verifyToken = verifyToken;
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            ok: true,
            msg: 'Password actualizado'
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error instanceof Error ? error.message : 'Upss, hubo un error en CHANGE-PASSWORD'
        });
    }
});
exports.changePassword = changePassword;
