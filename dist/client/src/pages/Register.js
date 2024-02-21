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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const react_router_dom_1 = require("react-router-dom");
const useForm_1 = require("../hooks/useForm");
const react_1 = require("react");
const Alert_1 = require("../components/Alert");
const AuthProvider_1 = __importDefault(require("../context/AuthProvider"));
const clientAxios_1 = __importDefault(require("../config/clientAxios"));
const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;
const Register = () => {
    const { alert, handleShowAlert } = (0, react_1.useContext)(AuthProvider_1.default);
    const { formValues, handleInputChange, reset } = (0, useForm_1.useForm)({
        name: "",
        email: "",
        password: "",
        password2: ""
    });
    const { name, email, password, password2 } = formValues;
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if ([name, email, password, password2].includes("")) {
            handleShowAlert("Todos los campos son obligatorios");
            return null;
        }
        if (!exRegEmail.test(email)) {
            handleShowAlert("El email tiene un formato inválido");
            return null;
        }
        if (password !== password2) {
            handleShowAlert("Las contraseñas no coinciden");
            return null;
        }
        try {
            const response = clientAxios_1.default.post('/register');
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
        console.log(formValues);
        reset();
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { className: "text-sky-600 font-black text-6xl capitalize" },
            "Crea tu ",
            React.createElement("span", { className: "text-slate-700" }, "cuenta")),
        alert.msg && React.createElement(Alert_1.Alert, Object.assign({}, alert)),
        React.createElement("form", { className: "my-10 bg-white shadow rounded-lg p-10", onSubmit: handleSubmit },
            React.createElement("div", { className: "my-5" },
                React.createElement("label", { className: "uppercase text-gray-600 block text-xl font-bold", htmlFor: "nombre" }, "Nombre"),
                React.createElement("input", { id: "nombre", type: "text", placeholder: "Tu Nombre", className: "w-full mt-3 p-3 border rounded-xl bg-gray-50", name: "name", value: name, onChange: handleInputChange })),
            React.createElement("div", { className: "my-5" },
                React.createElement("label", { className: "uppercase text-gray-600 block text-xl font-bold", htmlFor: "email" }, "Email"),
                React.createElement("input", { id: "email", type: "email", placeholder: "Email de Registro", className: "w-full mt-3 p-3 border rounded-xl bg-gray-50", name: "email", value: email, onChange: handleInputChange })),
            React.createElement("div", { className: "my-5" },
                React.createElement("label", { className: "uppercase text-gray-600 block text-xl font-bold", htmlFor: "password" }, "Contrase\u00F1a"),
                React.createElement("input", { id: "password", type: "password", placeholder: "Contrase\u00F1a de Registro", className: "w-full mt-3 p-3 border rounded-xl bg-gray-50", name: "password", value: password, onChange: handleInputChange })),
            React.createElement("div", { className: "my-5" },
                React.createElement("label", { className: "uppercase text-gray-600 block text-xl font-bold", htmlFor: "password2" }, "Repetir Password"),
                React.createElement("input", { id: "password2", type: "password", placeholder: "Repetir tu Password", className: "w-full mt-3 p-3 border rounded-xl bg-gray-50", name: "password2", value: password2, onChange: handleInputChange })),
            React.createElement("input", { type: "submit", value: "Crear Cuenta", className: "bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors" })),
        React.createElement("nav", { className: "text-center" },
            React.createElement(react_router_dom_1.Link, { className: 'block text-center my-5 text-slate-500 uppercase text-sm', to: "/" }, "\u00BFYa tienes una cuenta? Inicia Sesi\u00F3n"),
            React.createElement(react_router_dom_1.Link, { className: 'block text-center my-5 text-slate-500 uppercase text-sm', to: "/olvide-password" }, "Olvide Mi Password"))));
};
exports.Register = Register;
