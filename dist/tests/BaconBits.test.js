"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const react_router_dom_1 = require("react-router-dom");
const BaconBits_1 = __importDefault(require("../components/BaconBits"));
describe('BaconBits', () => {
    const mockData = {
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
    const BaconBitsComponent = (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(BaconBits_1.default, { selectedBacon: mockData })));
    test('renders the component correctly', () => {
        (0, react_2.render)(BaconBitsComponent);
    });
    test('clicking on "Back to Search" button navigates to "/bacon-main" route', () => {
        (0, react_2.render)(BaconBitsComponent);
        const linkElement = react_2.screen.getByText('Back to Search');
        expect(linkElement).toBeInTheDocument();
        react_2.fireEvent.click(linkElement);
        expect(window.location.pathname).toBe('/bacon-main');
    });
    test('displays the "Back to Search" button', () => {
        (0, react_2.render)(BaconBitsComponent);
        const linkElement = react_2.screen.getByText('Back to Search');
        expect(linkElement).toBeInTheDocument();
    });
    test('displays the correct "NOPE", or "YUUUUP!" heading', () => {
        (0, react_2.render)(BaconBitsComponent);
        const nopeElement = react_2.screen.getByText('NOPE!');
        expect(nopeElement).toBeInTheDocument();
        const yupElement = react_2.screen.queryByText('YUUUUUP!');
        expect(yupElement).not.toBeInTheDocument();
    });
    test('displays the correct image', () => {
        (0, react_2.render)(BaconBitsComponent);
        const imageElement = react_2.screen.getByAltText('Big Bill Crispy');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('src')).toBe('http://localhost:8000/images/mockData.jpg');
    });
    test('renders the resealable conditionals component', () => {
        (0, react_2.render)(BaconBitsComponent);
        const resealableConditionals = react_2.screen.getByTestId('resealable-conditionals');
        expect(resealableConditionals).toBeInTheDocument();
    });
    test('displays the social media buttons', () => {
        (0, react_2.render)(BaconBitsComponent);
        const socialMediaButtons = react_2.screen.getByTestId('social-media-buttons');
        expect(typeof socialMediaButtons).toBe('object');
        expect(socialMediaButtons).toBeInTheDocument();
    });
    test('displays the phone number if not resealable', () => {
        (0, react_2.render)(BaconBitsComponent);
        const phonePromptElement = react_2.screen.getByText("You can even Call 'em!");
        expect(typeof phonePromptElement.textContent).toBe('string');
        const phoneNumberElement = react_2.screen.getByText('1-254-867-5309');
        expect(typeof phoneNumberElement.textContent).toBe('string');
        expect(phoneNumberElement).toBeInTheDocument();
        expect(phoneNumberElement).not.toEqual(1 - 254 - 867 - 5309);
        expect(typeof phoneNumberElement).not.toBe('number');
    });
});
