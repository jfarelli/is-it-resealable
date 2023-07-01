"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SocialMediaButtons = ({ selectedBacon }) => {
    console.log('SELECTED BACON: ', selectedBacon);
    return (react_1.default.createElement("div", { "data-testid": "social-media-buttons", className: "flex justify-center gap-8" },
        selectedBacon.companyContacts.website ? (react_1.default.createElement("a", { href: selectedBacon.companyContacts.website, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement("button", { className: "p-2 text-xl w-[125%]" }, "Website"))) : (''),
        selectedBacon.companyContacts.facebook ? (react_1.default.createElement("a", { href: selectedBacon.companyContacts.facebook, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement("button", { className: "p-2 text-xl w-[125%]" }, "Facebook"))) : (''),
        selectedBacon.companyContacts.twitter ? (react_1.default.createElement("a", { href: selectedBacon.companyContacts.twitter, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement("button", { className: "p-2 text-xl w-[125%]" }, "Twitter"))) : (''),
        selectedBacon.companyContacts.instagram ? (react_1.default.createElement("a", { href: selectedBacon.companyContacts.instagram, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement("button", { className: "p-2 text-xl w-[125%]" }, "Instagram"))) : ('')));
};
exports.default = SocialMediaButtons;
