"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverPassword = void 0;
const react_1 = __importDefault(require("react"));
const RecoverPassword = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "Reestablec\u00E9 tu contrase\u00F1a"),
        react_1.default.createElement("form", { action: "" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { htmlFor: "password" }, "Nueva contrase\u00F1a"),
                react_1.default.createElement("input", { id: "password", type: "password", placeholder: "Escrib\u00ED tu nueva contrase\u00F1a" })),
            react_1.default.createElement("button", { type: "submit" }, "Guaradar tu contrase\u00F1a"))));
};
exports.RecoverPassword = RecoverPassword;
