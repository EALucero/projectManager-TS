"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const clientAxios = axios_1.default.create({
    baseURL: 'http://localhost:3000/api'
});
exports.default = clientAxios;
