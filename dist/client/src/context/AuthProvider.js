"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = void 0;
const react_1 = require("react");
const AuthContext = (0, react_1.createContext)({});
const AuthProvider = ({ children }) => {
    const [alert, setAlert] = (0, react_1.useState)({
        msg: ""
    });
    const handleShowAlert = (msg) => {
        setAlert({
            msg
        });
        setTimeout(() => {
            setAlert({
                msg: ""
            });
        }, 3000);
    };
    return (React.createElement(AuthContext.Provider, { value: {
            auth: {
                nombre: "Edu",
                apellido: "Lucero",
                token: "un_token"
            },
            alert,
            handleShowAlert
        } }, children));
};
exports.AuthProvider = AuthProvider;
exports.default = AuthContext;
