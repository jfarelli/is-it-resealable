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
    return (react_1.default.createElement("div", { "data-testid": "landing", className: "flex flex-col justify-center items-center text-center bg-[#fdf2e3] text-[#9B4428] h-screen" },
        react_1.default.createElement("div", { className: "container flex flex-col justify-center gap-y-8" },
            react_1.default.createElement("h1", { className: "font-bold prose-xl" }, "The bacon lovers website that dares to ask one of the most important packaging questions:"),
            react_1.default.createElement("div", { "data-testid": "resealableTextBackground", id: "resealableTextBackground", className: "container flex justify-center font-bold prose-xl bg-[#F9BB38] transition duration-270 ease-in-out" },
                react_1.default.createElement("h1", { "data-testid": "resealableText", id: "resealableText", className: "bg-[#F9BB38] transition duration-270 ease-in-out pt-2" }, "IS YOUR BACON RESEALABLE???")),
            react_1.default.createElement("h3", { "data-testid": "prompt-text", className: "font-bold sm:text-xl" },
                "After clicking the button below, you\u2019ll be led to a page where you can start getting answers!",
                react_1.default.createElement("br", null),
                "Search and filter by brand, bacon style, or resealability!"),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/bacon-main" },
                react_1.default.createElement("button", { id: "getAnswersButton", className: "prose-2xl pt-1 px-6", onMouseOver: colorChangeOver, onMouseOut: colorChangeOut }, "GET ANSWERS")))));
};
exports.default = Landing;
