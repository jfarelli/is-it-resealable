"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SidebarNav = ({ searchInput, checkboxInput, setCheckboxInput, setSearchInput, companyButtons, }) => {
    return (react_1.default.createElement("div", { className: "flex flex-col items-center bg-[#9B4428] h-screen w-[35%] sm:w-[15%] fixed pt-4" },
        react_1.default.createElement("input", { type: "text", placeholder: "Search Brand, or Style", value: searchInput, "aria-label": "search-input", onChange: (e) => setSearchInput(e.target.value), className: "w-[85%] overflow-ellipsis text-center rounded-xl border-2 mt-2 bg-white hover:cursor-text" }),
        react_1.default.createElement("div", { className: "flex flex-col items-center" },
            react_1.default.createElement("label", { className: "flex flex-col font-bold text-center text-md mt-2 text-[#F9BB38] italic" }, "Show Only Resealable Bacon"),
            react_1.default.createElement("input", { type: "checkbox", id: "onlyResealableBaconAllowed", "data-testid": "checkboxInput", value: checkboxInput.toString(), onChange: (e) => setCheckboxInput(e.target.checked), className: "form-checkbox w-5 h-5 mb-6 hover:cursor-pointer" })),
        react_1.default.createElement("div", { className: "flex flex-col gap-2 mt-[30%]" }, companyButtons)));
};
exports.default = SidebarNav;
