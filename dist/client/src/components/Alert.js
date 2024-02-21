"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = void 0;
const Alert = ({ msg }) => {
    return (React.createElement("div", { className: "bg-red-600 text-center p-3 rounded-md uppercase text-white font-bold text-sm my-8" }, msg));
};
exports.Alert = Alert;
