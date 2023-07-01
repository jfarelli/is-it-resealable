"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SocialMediaButtons_1 = __importDefault(require("./SocialMediaButtons"));
const ResealableConditionals = ({ selectedBacon }) => {
    return (react_1.default.createElement("div", { "data-testid": "resealable-conditionals", className: "flex flex-col items-center mt-[8%]" },
        react_1.default.createElement("h4", { className: "font-bold mb-1 text-2xl" }, selectedBacon.resealable === '❌' ? (react_1.default.createElement("p", null,
            selectedBacon.companyName,
            " does",
            ' ',
            react_1.default.createElement("span", { className: "uppercase text-red-600 text-3xl" }, "not"),
            " believe in resealable packaging for their",
            ' ',
            react_1.default.createElement("span", { className: "italic" },
                selectedBacon.baconStyle,
                "!"))) : (react_1.default.createElement("p", null,
            selectedBacon.companyName,
            ' ',
            react_1.default.createElement("span", { className: "uppercase text-green-600 text-3xl" }, "believes"),
            ' ',
            "in resealable packaging for their",
            ' ',
            react_1.default.createElement("span", { className: "italic" }, selectedBacon.baconStyle),
            "!"))),
        selectedBacon.resealable === '❌' ? (react_1.default.createElement("p", { className: "text-xl mb-3" },
            "Visit ",
            selectedBacon.companyName,
            " on social media and start a conversation!")) : (react_1.default.createElement("p", { className: "text-xl mb-2" },
            "Please follow and appreciate ",
            selectedBacon.companyName,
            " on Social Media for giving the people what they want!")),
        react_1.default.createElement(SocialMediaButtons_1.default, { selectedBacon: selectedBacon }),
        selectedBacon.companyContacts.phone &&
            selectedBacon.resealable === '❌' ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("p", { className: "mt-4 font-bold text-xl" },
                "You can even Call 'em! ",
                react_1.default.createElement("br", null),
                ' '),
            react_1.default.createElement("p", { className: "text-xl" }, selectedBacon.companyContacts.phone))) : ('')));
};
exports.default = ResealableConditionals;
