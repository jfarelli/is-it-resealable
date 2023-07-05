"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SocialMediaButtons = ({ selectedBacon, }) => {
    var _a, _b, _c, _d;
    return (react_1.default.createElement("div", { "data-testid": "social-media-buttons", className: "flex justify-center gap-8" },
        ((_a = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _a === void 0 ? void 0 : _a.website) ? (react_1.default.createElement("a", { href: selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.website, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement("button", { className: "p-2 text-xl w-[125%]" }, "Website"))) : (''),
        ((_b = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _b === void 0 ? void 0 : _b.facebook) ? (react_1.default.createElement("a", { href: selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.facebook, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement("button", { className: "p-2 text-xl w-[125%]" }, "Facebook"))) : (''),
        ((_c = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _c === void 0 ? void 0 : _c.twitter) ? (react_1.default.createElement("a", { href: selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.twitter, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement("button", { className: "p-2 text-xl w-[125%]" }, "Twitter"))) : (''),
        ((_d = selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts) === null || _d === void 0 ? void 0 : _d.instagram) ? (react_1.default.createElement("a", { href: selectedBacon === null || selectedBacon === void 0 ? void 0 : selectedBacon.companyContacts.instagram, target: "_blank", rel: "noopener noreferrer" },
            react_1.default.createElement("button", { className: "p-2 text-xl w-[125%]" }, "Instagram"))) : ('')));
};
exports.default = SocialMediaButtons;
