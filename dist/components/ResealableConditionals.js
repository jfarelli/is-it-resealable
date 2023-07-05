"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SocialMediaButtons_1 = __importDefault(require("./SocialMediaButtons"));
const ResealableConditionals = ({ selectedBacon, }) => {
    var _a;
    return (react_1.default.createElement("div", { "data-testid": "resealable-conditionals", className: "flex flex-col items-center mt-[8%]" },
        react_1.default.createElement("h4", { className: "font-bold mb-1 text-2xl" }, (selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.resealable) === '❌' ? (react_1.default.createElement("p", null, selectedBacon === null || selectedBacon === void 0 ? void 0 :
            selectedBacon.companyName,
            " does",
            ' ',
            react_1.default.createElement("span", { className: "uppercase text-red-600 text-3xl" }, "not"),
            " believe in resealable packaging for their",
            ' ',
            react_1.default.createElement("span", { className: "italic" }, selectedBacon === null || selectedBacon === void 0 ? void 0 :
                selectedBacon.baconStyle,
                "!"))) : (react_1.default.createElement("p", null, selectedBacon === null || selectedBacon === void 0 ? void 0 :
            selectedBacon.companyName,
            ' ',
            react_1.default.createElement("span", { className: "uppercase text-green-600 text-3xl" }, "believes"),
            ' ',
            "in resealable packaging for their",
            ' ',
            react_1.default.createElement("span", { className: "italic" }, selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.baconStyle),
            "!"))),
        (selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.resealable) === '❌' ? (react_1.default.createElement("p", { className: "text-xl mb-3" },
            "Visit ", selectedBacon === null || selectedBacon === void 0 ? void 0 :
            selectedBacon.companyName,
            " on social media and start a conversation!")) : (react_1.default.createElement("p", { className: "text-xl mb-2" },
            "Please follow and appreciate ", selectedBacon === null || selectedBacon === void 0 ? void 0 :
            selectedBacon.companyName,
            " on Social Media for giving the people what they want!")),
        react_1.default.createElement(SocialMediaButtons_1.default, { selectedBacon: selectedBacon }),
        ((_a = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _a === void 0 ? void 0 : _a.phone) &&
            (selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.resealable) === '❌' ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("p", { className: "mt-4 font-bold text-xl" }, "You can even Call 'em!"),
            react_1.default.createElement("p", { className: "text-xl" }, selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.phone))) : ('')));
};
exports.default = ResealableConditionals;
