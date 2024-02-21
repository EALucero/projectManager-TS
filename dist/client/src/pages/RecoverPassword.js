"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverPassword = void 0;
const RecoverPassword = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Reestablec\u00E9 tu contrase\u00F1a"),
        React.createElement("form", { action: "" },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "password" }, "Nueva contrase\u00F1a"),
                React.createElement("input", { id: "password", type: "password", placeholder: "Escrib\u00ED tu nueva contrase\u00F1a" })),
            React.createElement("button", { type: "submit" }, "Guaradar tu contrase\u00F1a"))));
};
exports.RecoverPassword = RecoverPassword;
