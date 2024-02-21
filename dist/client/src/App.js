"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthProvider_1 = require("./context/AuthProvider");
const react_router_dom_1 = require("react-router-dom");
const AuthLayout_1 = require("./layouts/AuthLayout");
const Login_1 = require("./pages/Login");
const NotFound_1 = require("./pages/NotFound");
const Register_1 = require("./pages/Register");
const ForgetPassword_1 = require("./pages/ForgetPassword");
function App() {
    return (React.createElement(AuthProvider_1.AuthProvider, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(AuthLayout_1.AuthLayout, null) },
                React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(Login_1.Login, null) }),
                React.createElement(react_router_dom_1.Route, { path: '/registrar', element: React.createElement(Register_1.Register, null) }),
                React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement(NotFound_1.NotFound, null) }),
                React.createElement(react_router_dom_1.Route, { path: '/olvide-password', element: React.createElement(ForgetPassword_1.ForgetPassword, null) })))));
}
exports.default = App;
