"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const react_router_dom_1 = require("react-router-dom");
const SocialMediaButtons_1 = __importDefault(require("../components/SocialMediaButtons"));
describe('SocialMediaButtons', () => {
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
    test('renders social media buttons with correct links', () => {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(SocialMediaButtons_1.default, { selectedBacon: selectedBacon })));
        const socialMediaButtons = react_2.screen.getByTestId('social-media-buttons');
        const links = (0, react_2.within)(socialMediaButtons).getAllByRole('link');
        const websiteButton = links[0];
        const twitterButton = links[1];
        const facebookButton = links[2];
        expect(websiteButton).toBeInTheDocument();
        expect(websiteButton.getAttribute('href')).toBe(selectedBacon.companyContacts.website);
        expect(facebookButton).toBeInTheDocument();
        expect(facebookButton.getAttribute('href')).toBe(selectedBacon.companyContacts.facebook);
        expect(twitterButton).toBeInTheDocument();
        expect(twitterButton.getAttribute('href')).toBe(selectedBacon.companyContacts.twitter);
    });
    test('does not render buttons when contact links are missing', () => {
        const selectedBaconWithoutContacts = {
            id: 1,
            companyName: 'Big Bill',
            companyContacts: {},
            baconStyle: 'Crispy',
            resealable: '❌',
            image: 'mockData.jpg',
            displayBaconDetails: jest.fn(),
        };
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(SocialMediaButtons_1.default, { selectedBacon: selectedBaconWithoutContacts })));
        const websiteButton = react_2.screen.queryByRole('link', { name: /website/i });
        const facebookButton = react_2.screen.queryByRole('link', { name: /facebook/i });
        const twitterButton = react_2.screen.queryByRole('link', { name: /twitter/i });
        expect(websiteButton).not.toBeInTheDocument();
        expect(facebookButton).not.toBeInTheDocument();
        expect(twitterButton).not.toBeInTheDocument();
    });
    test('opens links in a new tab when clicked', () => {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(SocialMediaButtons_1.default, { selectedBacon: selectedBacon })));
        const socialMediaButtons = react_2.screen.getByTestId('social-media-buttons');
        const links = (0, react_2.within)(socialMediaButtons).getAllByRole('link');
        const websiteButton = links[0];
        const twitterButton = links[1];
        const facebookButton = links[2];
        expect(websiteButton).toHaveAttribute('target', '_blank');
        expect(facebookButton).toHaveAttribute('target', '_blank');
        expect(twitterButton).toHaveAttribute('target', '_blank');
    });
    test('triggers proper actions when buttons are clicked', () => {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(SocialMediaButtons_1.default, { selectedBacon: selectedBacon })));
        const socialMediaButtons = react_2.screen.getByTestId('social-media-buttons');
        const links = (0, react_2.within)(socialMediaButtons).getAllByRole('link');
        const websiteButton = links[0];
        const twitterButton = links[1];
        const facebookButton = links[2];
        const customAttribute = 'data-mock-clicked';
        react_2.fireEvent.click(websiteButton);
        websiteButton.setAttribute(customAttribute, 'true');
        react_2.fireEvent.click(facebookButton);
        facebookButton.setAttribute(customAttribute, 'true');
        react_2.fireEvent.click(twitterButton);
        twitterButton.setAttribute(customAttribute, 'true');
        expect(websiteButton.getAttribute(customAttribute)).toBe('true');
        expect(facebookButton.getAttribute(customAttribute)).toBe('true');
        expect(twitterButton.getAttribute(customAttribute)).toBe('true');
    });
});
