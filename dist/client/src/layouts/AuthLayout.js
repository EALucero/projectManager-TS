"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLayout = void 0;
const react_router_dom_1 = require("react-router-dom");
const AuthLayout = () => {
    return (React.createElement("main", { className: 'container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center' },
        React.createElement("div", { className: 'md:w-2/3 lg:w-2/5 ' },
            React.createElement(react_router_dom_1.Outlet, null))));
};
exports.AuthLayout = AuthLayout;
