"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const react_router_dom_1 = require("react-router-dom");
const NotFound = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { className: "text-sky-600 font-black text-6xl capitalize" },
            "P\u00E1gina ",
            React.createElement("span", { className: "text-slate-700" }, "no encontrada")),
        React.createElement("nav", { className: "text-center" },
            React.createElement(react_router_dom_1.Link, { className: 'block text-center my-5 text-slate-500 uppercase text-sm', to: "/" }, "Volver al inicio"))));
};
exports.NotFound = NotFound;
