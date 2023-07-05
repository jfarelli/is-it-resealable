"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SingleBacon_1 = __importDefault(require("./SingleBacon"));
const SidebarNav_1 = __importDefault(require("./SidebarNav"));
const useSearchAndFilter_1 = __importDefault(require("../hooks/useSearchAndFilter"));
const BaconHolder = ({ data, displayBaconDetails, }) => {
    const { searchInput, setSearchInput, checkboxInput, setCheckboxInput, companyButtons, filteredSearchData, } = (0, useSearchAndFilter_1.default)(data);
    return (react_1.default.createElement("div", { className: "flex mt-16 mb-4 bg-[#fdf2e3]" },
        react_1.default.createElement(SidebarNav_1.default, { searchInput: searchInput, checkboxInput: checkboxInput, setCheckboxInput: setCheckboxInput, setSearchInput: setSearchInput, companyButtons: companyButtons }),
        react_1.default.createElement("div", { className: "flex flex-wrap justify-center gap-7 mt-4 ml-[15%]" }, filteredSearchData.map((item) => {
            return (react_1.default.createElement(SingleBacon_1.default, { id: item.id, key: item.id, companyName: item.companyName, baconStyle: item.baconStyle, resealable: item.resealable, image: item.image, displayBaconDetails: displayBaconDetails }));
        }))));
};
exports.default = BaconHolder;
