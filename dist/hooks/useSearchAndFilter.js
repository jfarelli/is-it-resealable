"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
// type BaconSearchProps = {
// 	// ... other props
// };
const useSearchAndFilter = (data) => {
    const [searchInput, setSearchInput] = (0, react_1.useState)('');
    const [checkboxInput, setCheckboxInput] = (0, react_1.useState)(false);
    const [selectedCompany, setSelectedCompany] = (0, react_1.useState)('');
    const sortedData = data.sort((a, b) => {
        // console.log('A: ', a, ' B: ', b);
        return a.companyName
            .toUpperCase()
            .localeCompare(b.companyName.toUpperCase());
    });
    const nonDuplicateNames = [
        ...new Set(sortedData.map((obj) => obj.companyName)),
    ];
    const filterOnButtonClick = (e) => {
        const target = e.target;
        if (selectedCompany === target.id) {
            setSelectedCompany('');
        }
        else {
            setSelectedCompany(target.id);
        }
    };
    console.log('SELECTED Company: ', selectedCompany);
    const companyButtons = nonDuplicateNames.map((name) => (react_1.default.createElement("button", { key: name, id: name, "data-testid": "companyButton", onClick: filterOnButtonClick, className: `h-[2em] text-lg p-4 flex items-center justify-center ${selectedCompany === name
            ? 'bg-[#F9BB38] text-[#9B4428]'
            : 'bg-[#9B4428]'}` }, name)));
    const filteredSearchData = sortedData.filter((item) => {
        const searchInputLower = searchInput.toLowerCase();
        const searchMatches = ['companyName', 'baconStyle'].some((prop) => item[prop]
            .toLowerCase()
            .includes(searchInputLower));
        const checkboxMatches = !checkboxInput || item.resealable === '✅';
        if (selectedCompany) {
            return (item.companyName === selectedCompany && searchMatches && checkboxMatches);
        }
        else {
            return searchMatches && checkboxMatches;
        }
    });
    return [
        searchInput,
        setSearchInput,
        checkboxInput,
        setCheckboxInput,
        selectedCompany,
        companyButtons,
        filteredSearchData,
    ];
};
exports.default = useSearchAndFilter;
