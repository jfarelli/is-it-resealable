"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const cg_1 = require("react-icons/cg");
const SocialMediaButtons = ({ selectedBacon, }) => {
    var _a, _b, _c, _d, _e;
    return (react_1.default.createElement("div", { "data-testid": "social-media-buttons", className: "flex justify-center gap-2" },
        ((_a = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _a === void 0 ? void 0 : _a.website) ? (react_1.default.createElement("a", { href: selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.website, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement(cg_1.CgWebsite, { className: "linked-icon" }))) : (''),
        ((_b = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _b === void 0 ? void 0 : _b.twitter) ? (react_1.default.createElement("a", { href: selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.twitter, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement(fa_1.FaTwitter, { className: "linked-icon" }))) : (''),
        ((_c = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _c === void 0 ? void 0 : _c.instagram) ? (react_1.default.createElement("a", { href: selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.instagram, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement(fa_1.FaInstagram, { className: "linked-icon" }))) : (''),
        ((_d = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _d === void 0 ? void 0 : _d.facebook) ? (react_1.default.createElement("a", { href: selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.facebook, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement(fa_1.FaFacebook, { className: "linked-icon" }))) : (''),
        ((_e = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _e === void 0 ? void 0 : _e.linkedIn) ? (react_1.default.createElement("a", { href: selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.linkedIn, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement(fa_1.FaLinkedin, { className: "linked-icon" }))) : ('')));
};
exports.default = SocialMediaButtons;
