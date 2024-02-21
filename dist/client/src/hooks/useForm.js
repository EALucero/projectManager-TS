"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = void 0;
const react_1 = require("react");
const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = (0, react_1.useState)(initialState);
    const handleInputChange = (e) => {
        setFormValues(Object.assign(Object.assign({}, formValues), { [e.target.name]: e.target.value }));
    };
    const reset = () => {
        setFormValues(initialState);
    };
    return {
        formValues,
        handleInputChange,
        reset
    };
};
exports.useForm = useForm;
