"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPassword = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ForgetPassword = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "Recupera tu acceso"),
        react_1.default.createElement("form", { action: "" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { htmlFor: "email" }, "Correo electr\u00F3nico"),
                react_1.default.createElement("input", { id: "email", type: "email", placeholder: "Ingres\u00E1 tu email" })),
            react_1.default.createElement("button", { type: "submit" }, "Recuperar contrase\u00F1a")),
        react_1.default.createElement("nav", null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/register" }, "\u00BFNo ten\u00E9s una cuenta? Registrate"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "\u00BFEst\u00E1s registrado? Inici\u00E1 sesi\u00F3n"))));
};
exports.ForgetPassword = ForgetPassword;
