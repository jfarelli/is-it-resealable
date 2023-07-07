"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const SidebarNav_1 = __importDefault(require("../components/SidebarNav"));
describe('SidebarNav', () => {
    const mockProps = {
        searchInput: '',
        checkboxInput: false,
        setCheckboxInput: jest.fn(),
        setSearchInput: jest.fn(),
        companyButtons: [],
    };
    it('should render the component with correct initial values', () => {
        (0, react_2.render)(react_1.default.createElement(SidebarNav_1.default, Object.assign({}, mockProps)));
        const searchInput = react_2.screen.getByLabelText('search-input');
        expect(searchInput.value).toBe('');
        const checkboxInput = react_2.screen.getByTestId('checkboxInput');
        expect(checkboxInput.checked).toBe(false);
    });
    it('should call setSearchInput when search input value changes', () => {
        (0, react_2.render)(react_1.default.createElement(SidebarNav_1.default, Object.assign({}, mockProps)));
        const searchInput = react_2.screen.getByLabelText('search-input');
        react_2.fireEvent.change(searchInput, { target: { value: 'example' } });
        expect(mockProps.setSearchInput).toHaveBeenCalledTimes(1);
        expect(mockProps.setSearchInput).toHaveBeenCalledWith('example');
    });
    it('should call setCheckboxInput when checkbox value changes', () => {
        (0, react_2.render)(react_1.default.createElement(SidebarNav_1.default, Object.assign({}, mockProps)));
        const checkboxInput = react_2.screen.getByTestId('checkboxInput');
        react_2.fireEvent.click(checkboxInput);
        expect(mockProps.setCheckboxInput).toHaveBeenCalledTimes(1);
        expect(mockProps.setCheckboxInput).toHaveBeenCalledWith(true);
    });
});
