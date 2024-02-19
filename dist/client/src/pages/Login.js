"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const react_router_dom_1 = require("react-router-dom");
const Login = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { className: "text-sky-600 font-black text-6xl capitalize" },
            "Inicia ",
            React.createElement("span", { className: "text-slate-700" }, "sesi\u00F3n")),
        React.createElement("form", { className: "my-10 bg-white shadow rounded-lg p-10" },
            React.createElement("div", { className: "my-5" },
                React.createElement("label", { className: "uppercase text-gray-600 block text-xl font-bold", htmlFor: "email" }, "Email"),
                React.createElement("input", { id: "email", type: "email", placeholder: "Email de Registro", className: "w-full mt-3 p-3 border rounded-xl bg-gray-50" })),
            React.createElement("div", { className: "my-5" },
                React.createElement("label", { className: "uppercase text-gray-600 block text-xl font-bold", htmlFor: "password" }, "Contrase\u00F1a"),
                React.createElement("input", { id: "password", type: "password", placeholder: "Contrase\u00F1a de Registro", className: "w-full mt-3 p-3 border rounded-xl bg-gray-50" })),
            React.createElement("input", { type: "submit", value: "Iniciar Sesi\u00F3n", className: "bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors" })),
        React.createElement("nav", { className: "text-center" },
            React.createElement(react_router_dom_1.Link, { className: 'block text-center my-5 text-slate-500 uppercase text-sm', to: "/registrar" }, "\u00BFNo tienes una cuenta? Reg\u00EDstrate"),
            React.createElement(react_router_dom_1.Link, { className: 'block text-center my-5 text-slate-500 uppercase text-sm', to: "/olvide-password" }, "Olvide Mi Password"))));
};
exports.Login = Login;
