"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ResealableConditionals_1 = __importDefault(require("./ResealableConditionals"));
const BaconBits = ({ selectedBacon }) => {
    return (react_1.default.createElement("div", { className: "mt-[5%] flex flex-col items-center bg-[#fdf2e3]" },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/bacon-main" },
            react_1.default.createElement("button", { className: "text-xl mt-[5%] w-40" }, "Back to Search")),
        react_1.default.createElement("div", { className: "flex flex-col" },
            react_1.default.createElement("div", { className: "flex flex-col flex-wrap items-center w-screen justify-center" },
                (selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.resealable) === '❌' ? (react_1.default.createElement("h1", { className: "text-8xl mt-5 text-red-600 font-bold" }, "NOPE!")) : (react_1.default.createElement("h1", { className: "text-8xl mt-8 text-green-600 font-bold" }, "YUUUUUP!")),
                react_1.default.createElement("div", { className: "w-[25%] h-40 aspect-w-1 aspect-h-1 mt-[1%]" },
                    react_1.default.createElement("img", { src: `http://localhost:8000/images/${selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.image}`, alt: `${selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyName} ${selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.baconStyle}`, className: "w-full h-auto object-fill shadow-sm shadow-gray-600" }))),
            react_1.default.createElement(ResealableConditionals_1.default, { selectedBacon: selectedBacon }))));
};
exports.default = BaconBits;
