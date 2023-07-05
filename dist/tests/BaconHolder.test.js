"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const BaconHolder_1 = __importDefault(require("../components/BaconHolder"));
const Header_1 = __importDefault(require("../components/Header"));
const react_router_dom_1 = require("react-router-dom");
describe('BaconHolder', () => {
    const displayBaconDetails = jest.fn();
    const mockData = [
        {
            id: 1,
            companyName: 'Good Bacon Company A',
            baconStyle: 'Style 1 - Thick Cut',
            resealable: '✅',
            image: 'https://example.com/image1.png',
        },
        {
            id: 2,
            companyName: 'Bad Bacon Company B',
            baconStyle: 'Style 2 - Thin Cut',
            resealable: '❌',
            image: 'https://example.com/image2.png',
        },
        {
            id: 3,
            companyName: 'Good Bacon Company C',
            baconStyle: 'Style 3 - Applewood Smoked',
            resealable: '✅',
            image: 'https://example.com/image2.png',
        },
    ];
    const BaconHolderComponent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.default, { scrolled: false }),
        react_1.default.createElement(BaconHolder_1.default, { data: mockData, displayBaconDetails: displayBaconDetails })));
    test('renders the BaconHolder component', () => {
        (0, react_2.render)(BaconHolderComponent, { wrapper: react_router_dom_1.BrowserRouter });
    });
    test('renders the checkbox and checkbox text', () => {
        (0, react_2.render)(BaconHolderComponent, { wrapper: react_router_dom_1.BrowserRouter });
        const sideBarTextElement = react_2.screen.getByText(/show only resealable bacon/i);
        expect(sideBarTextElement).toBeInTheDocument();
    });
    test('renders individual SingleBacon components', () => {
        (0, react_2.render)(BaconHolderComponent, { wrapper: react_router_dom_1.BrowserRouter });
        const singleBaconComponents = react_2.screen.getAllByTestId('singleBacon');
        expect(singleBaconComponents).toHaveLength(mockData.length);
    });
    test('filters data based on search input', () => {
        (0, react_2.render)(BaconHolderComponent, { wrapper: react_router_dom_1.BrowserRouter });
        const searchInput = react_2.screen.getByPlaceholderText(/search brand, or style/i);
        react_2.fireEvent.change(searchInput, { target: { value: 'Style 1' } });
        expect(searchInput.value).toBe('Style 1');
        expect(react_2.screen.getAllByTestId('singleBacon')).toHaveLength(1);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(0);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(2);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(3);
        react_2.fireEvent.change(searchInput, { target: { value: 'Good Bacon' } });
        expect(searchInput.value).toBe('Good Bacon');
        expect(react_2.screen.getAllByTestId('singleBacon')).toHaveLength(2);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(0);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(1);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(3);
    });
    test('filters data based on checkbox input', () => {
        (0, react_2.render)(BaconHolderComponent, { wrapper: react_router_dom_1.BrowserRouter });
        const checkboxInput = react_2.screen.getByTestId(/checkboxInput/i);
        react_2.fireEvent.click(checkboxInput);
        expect(checkboxInput.checked).toBe(true);
        expect(checkboxInput.checked).not.toBe(false);
        expect(react_2.screen.getAllByTestId('singleBacon')).toHaveLength(2);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(0);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(1);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(3);
    });
    test('filters data based on company button click', () => {
        (0, react_2.render)(BaconHolderComponent, { wrapper: react_router_dom_1.BrowserRouter });
        const companyButton = react_2.screen.getAllByTestId(/companyButton/i);
        expect(companyButton).toHaveLength(3);
        expect(companyButton).not.toHaveLength(0);
        expect(companyButton).not.toHaveLength(1);
        expect(companyButton).not.toHaveLength(2);
        react_2.fireEvent.click(companyButton[1]);
        expect(react_2.screen.getAllByTestId('singleBacon')).toHaveLength(1);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(0);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(2);
        expect(react_2.screen.getAllByTestId('singleBacon')).not.toHaveLength(3);
    });
});
