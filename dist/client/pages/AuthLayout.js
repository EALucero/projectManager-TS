"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLayout = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AuthLayout = () => {
    return (<main> 
        <div> 
            <react_router_dom_1.Outlet /> 
        </div>    
    </main>);
};
exports.AuthLayout = AuthLayout;
