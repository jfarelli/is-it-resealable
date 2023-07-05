"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const ResealableConditionals_1 = __importDefault(require("../components/ResealableConditionals"));
const react_router_dom_1 = require("react-router-dom");
describe('ResealableConditionals', () => {
    const selectedBacon = {
        id: 1,
        companyName: 'Big Bill',
        companyContacts: {
            twitter: 'https://twitter.com/BigBill',
            facebook: 'https://www.facebook.com/bigbill/',
            website: 'https://bigbill.com/',
            phone: '1-254-867-5309',
        },
        baconStyle: 'Crispy',
        resealable: '❌',
        image: 'mockData.jpg',
        displayBaconDetails: jest.fn(),
    };
    test('renders "not believe" message for non-resealable bacon', () => {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(ResealableConditionals_1.default, { selectedBacon: selectedBacon })));
        const notBelieveMessage = react_2.screen.getByText(/not/i);
        const resealableText = react_2.screen.queryByText(/believes/i);
        expect(notBelieveMessage).toBeInTheDocument();
        expect(resealableText).not.toBeInTheDocument();
    });
    test('renders "believes" message for resealable bacon', () => {
        const selectedBaconWithResealable = Object.assign(Object.assign({}, selectedBacon), { resealable: '✅' });
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(ResealableConditionals_1.default, { selectedBacon: selectedBaconWithResealable })));
        const believesMessage = react_2.screen.getByText(/believes/i);
        const notBelieveText = react_2.screen.queryByText(/not believe/i);
        expect(believesMessage).toBeInTheDocument();
        expect(notBelieveText).not.toBeInTheDocument();
    });
    test('renders correct contact information for non-resealable bacon', () => {
        var _a, _b;
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(ResealableConditionals_1.default, { selectedBacon: selectedBacon })));
        const contactMessage = react_2.screen.getByText(/you can even call/i);
        const phoneText = react_2.screen.getByText((_b = (_a = selectedBacon.companyContacts) === null || _a === void 0 ? void 0 : _a.phone) !== null && _b !== void 0 ? _b : '');
        expect(contactMessage).toBeInTheDocument();
        expect(phoneText).toBeInTheDocument();
    });
    test('renders social media buttons for non-resealable bacon', () => {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(ResealableConditionals_1.default, { selectedBacon: selectedBacon })));
        const socialMediaButtons = react_2.screen.getByTestId('social-media-buttons');
        expect(socialMediaButtons).toBeInTheDocument();
    });
    test('does not render contact information for resealable bacon', () => {
        var _a, _b;
        const selectedBaconWithResealable = Object.assign(Object.assign({}, selectedBacon), { resealable: '✅' });
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(ResealableConditionals_1.default, { selectedBacon: selectedBaconWithResealable })));
        const contactMessage = react_2.screen.queryByText(/you can even call/i);
        const phoneText = react_2.screen.queryByText((_b = (_a = selectedBacon.companyContacts) === null || _a === void 0 ? void 0 : _a.phone) !== null && _b !== void 0 ? _b : '');
        expect(contactMessage).not.toBeInTheDocument();
        expect(phoneText).not.toBeInTheDocument();
    });
});
