"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Landing = () => {
    const colorChangeOver = (e) => {
        const target = e.target;
        if (target.id === 'getAnswersButton') {
            let resealableBackgroundColor = document.getElementById('resealableTextBackground');
            let resealableTextColor = document.getElementById('resealableText');
            if (resealableBackgroundColor && resealableTextColor) {
                resealableBackgroundColor.style.backgroundColor = '#9B4428';
                resealableBackgroundColor.style.color = '#F9BB38';
                resealableTextColor.style.backgroundColor = '#9B4428';
            }
        }
    };
    const colorChangeOut = (e) => {
        const target = e.target;
        if (target.id === 'getAnswersButton') {
            let resealableBackgroundColor = document.getElementById('resealableTextBackground');
            let resealableTextColor = document.getElementById('resealableText');
            if (resealableBackgroundColor && resealableTextColor) {
                resealableBackgroundColor.style.backgroundColor = '#F9BB38';
                resealableBackgroundColor.style.color = '#9B4428';
                resealableTextColor.style.backgroundColor = '#F9BB38';
            }
        }
    };
    return (react_1.default.createElement("div", { className: "flex flex-col text-center h-screen items-center justify-center gap-y-8 bg-[#fdf2e3] text-[#9B4428]" },
        react_1.default.createElement("h2", { className: "font-bold text-2xl sm:text-3xl" },
            "The bacon lovers website that dares to ask",
            react_1.default.createElement("br", null),
            "one of the most important packaging questions:"),
        react_1.default.createElement("div", { "data-testid": "resealableTextBackground", id: "resealableTextBackground", className: "font-bold bg-[#F9BB38] py-2 px-6 rounded-tl-3xl rounded-br-3xl transition duration-270 ease-in-out" },
            react_1.default.createElement("h1", { "data-testid": "resealableText", id: "resealableText", className: "bg-[#F9BB38] pt-1 sm:pt-2 text-3xl sm:text-6xl transition duration-270 ease-in-out" }, "IS IT RESEALABLE???")),
        react_1.default.createElement("h3", { "data-testid": "prompt-text", className: "font-bold sm:text-xl" },
            "After clicking the button below, you\u2019ll be led to a page where you can start getting answers!",
            react_1.default.createElement("br", null),
            "Search and filter by brand, bacon style, or resealability!"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/bacon-main" },
            react_1.default.createElement("button", { id: "getAnswersButton", className: "p-2 sm:p-3 text-1xl sm:text-3xl", onMouseOver: colorChangeOver, onMouseOut: colorChangeOut }, "Get Answers!"))));
};
exports.default = Landing;
