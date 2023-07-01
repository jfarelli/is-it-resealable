"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Header = ({ scrolled }) => {
    return (react_1.default.createElement("div", { "data-testid": "header-element", className: `bg-[#F9BB38] text-[#9B4428] h-16 z-10 flex items-center justify-center drop-shadow-2xl fixed top-0 left-0 right-0 font-bold ${scrolled ? 'shadow-sm shadow-gray-700' : ''}` },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
            react_1.default.createElement("h1", { className: "text-center bg-[#F9BB38] text-2xl sm:text-4xl hover:cursor-pointer" }, "Is Your Bacon Resealable???"))));
};
exports.default = Header;
