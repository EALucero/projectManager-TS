"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const AuthProvider_1 = __importDefault(require("../context/AuthProvider"));
const useAuth = () => {
    return (0, react_1.useContext)(AuthProvider_1.default);
};
exports.default = useAuth;
