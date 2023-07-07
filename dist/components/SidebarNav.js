"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SidebarNav = ({ searchInput, checkboxInput, setCheckboxInput, setSearchInput, companyButtons, }) => {
    return (react_1.default.createElement("div", { className: "flex flex-col items-center h-screen bg-[#9B4428] fixed p-4 mt-14 z-10" },
        react_1.default.createElement("input", { type: "text", placeholder: "Search Brand, or Style", value: searchInput, "aria-label": "search-input", onChange: (e) => setSearchInput(e.target.value), className: "overflow-ellipsis text-center rounded-xl border-2 bg-white hover:cursor-text mt-2" }),
        react_1.default.createElement("div", { className: "flex flex-col items-center" },
            react_1.default.createElement("label", { className: "flex flex-col mt-2 font-bold text-center prose-lg text-[#F9BB38] italic" }, "Show Only Resealable Bacon"),
            react_1.default.createElement("input", { type: "checkbox", id: "onlyResealableBaconAllowed", "data-testid": "checkboxInput", value: checkboxInput.toString(), onChange: (e) => setCheckboxInput(e.target.checked), className: "hover:cursor-pointer w-5 h-5 mb-6" })),
        react_1.default.createElement("div", { className: "flex flex-col gap-2 mt-4" }, companyButtons)));
};
exports.default = SidebarNav;
