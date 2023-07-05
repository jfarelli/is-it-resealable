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
const SingleBacon_1 = __importDefault(require("../components/SingleBacon"));
const react_router_dom_1 = require("react-router-dom");
const mockData = [
    {
        id: 1,
        companyName: 'Big Bill',
        baconStyle: 'Crispy',
        resealable: '❌',
        image: 'mockData.jpg',
        displayBaconDetails: jest.fn(),
    },
];
const SingleBaconComponent = (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(Header_1.default, { scrolled: false }),
    react_1.default.createElement(BaconHolder_1.default, { data: mockData, displayBaconDetails: mockData[0].displayBaconDetails })));
describe('SingleBacon', () => {
    it('renders correctly', () => {
        (0, react_2.render)(SingleBaconComponent, { wrapper: react_router_dom_1.BrowserRouter });
        const singleBacon = react_2.screen.getByTestId('singleBacon');
        const companyName = react_2.screen.getByTestId('company-name');
        const baconStyle = react_2.screen.getByText('Crispy');
        const resealable = react_2.screen.getByText('IS IT RESEALABLE? ❌');
        const button = react_2.screen.getByText("Big Bill's Details");
        expect(singleBacon).toBeInTheDocument();
        expect(companyName).toBeInTheDocument();
        expect(baconStyle).toBeInTheDocument();
        expect(resealable).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
    test('displays the correct image', () => {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(SingleBacon_1.default, { id: 1, companyName: "Big Bill", baconStyle: "Crispy", resealable: "\u274C", image: "mockData.jpg", displayBaconDetails: jest.fn() })));
        const image = react_2.screen.getByAltText('Big Bill Crispy Bacon');
        expect(image).toHaveAttribute('src', 'http://localhost:8000/images/mockData.jpg');
    });
    test('triggers handleSelectedBacon correctly when button is clicked', () => {
        (0, react_2.render)(SingleBaconComponent, { wrapper: react_router_dom_1.BrowserRouter });
        const button = react_2.screen.getByText("Big Bill's Details");
        react_2.fireEvent.click(button);
        expect(mockData[0].displayBaconDetails).toHaveBeenCalledTimes(1);
        expect(mockData[0].displayBaconDetails).toHaveBeenCalledWith('1');
    });
});
