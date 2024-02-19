"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Login = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", { className: "text-sky-600 font-black text-6xl capitalize" },
            "Inicia ",
            react_1.default.createElement("span", { className: "text-slate-700" }, "sesi\u00F3n")),
        react_1.default.createElement("form", { className: "my-10 bg-white shadow rounded-lg p-10" },
            react_1.default.createElement("div", { className: "my-5" },
                react_1.default.createElement("label", { className: "uppercase text-gray-600 block text-xl font-bold", htmlFor: "email" }, "Email"),
                react_1.default.createElement("input", { id: "email", type: "email", placeholder: "Email de Registro", className: "w-full mt-3 p-3 border rounded-xl bg-gray-50" })),
            react_1.default.createElement("div", { className: "my-5" },
                react_1.default.createElement("label", { className: "uppercase text-gray-600 block text-xl font-bold", htmlFor: "password" }, "Contrase\u00F1a"),
                react_1.default.createElement("input", { id: "password", type: "password", placeholder: "Contrase\u00F1a de Registro", className: "w-full mt-3 p-3 border rounded-xl bg-gray-50" })),
            react_1.default.createElement("input", { type: "submit", value: "Iniciar Sesi\u00F3n", className: "bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors" })),
        react_1.default.createElement("nav", { className: "lg:flex lg:justify-between" },
            react_1.default.createElement(react_router_dom_1.Link, { className: 'block text-center my-5 text-slate-500 uppercase text-sm', to: "/registrar" }, "\u00BFNo tienes una cuenta? Reg\u00EDstrate"),
            react_1.default.createElement(react_router_dom_1.Link, { className: 'block text-center my-5 text-slate-500 uppercase text-sm', to: "/olvide-password" }, "Olvide Mi Password"))));
};
exports.Login = Login;
