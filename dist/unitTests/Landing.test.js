"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
const Landing_1 = __importDefault(require("../components/Landing"));
const react_router_dom_1 = require("react-router-dom");
describe('Landing', () => {
    test('renders the Landing component', () => {
        (0, react_2.render)(react_1.default.createElement(Landing_1.default, null), { wrapper: react_router_dom_1.BrowserRouter });
        expect(react_2.screen.getByText(/the bacon lovers website/i)).toBeInTheDocument();
        expect(react_2.screen.getByText(/is your bacon resealable/i)).toBeInTheDocument();
        expect(react_2.screen.getByText(/after clicking the button below/i)).toBeInTheDocument();
        expect(react_2.screen.getByText(/get answers/i)).toBeInTheDocument();
    });
    test('should change colors of title h1 element and button on mouse over', () => {
        (0, react_2.render)(react_1.default.createElement(Landing_1.default, null), { wrapper: react_router_dom_1.BrowserRouter });
        react_2.fireEvent.mouseOver(react_2.screen.getByText(/get answers/i));
        expect(react_2.screen.getByTestId('resealableTextBackground')).toHaveStyle('background-color: #9B4428');
        expect(react_2.screen.getByTestId('resealableTextBackground')).not.toHaveStyle('background-color: #F9BB38');
        expect(react_2.screen.getByTestId('resealableTextBackground')).toHaveStyle('color: #F9BB38');
        expect(react_2.screen.getByTestId('resealableTextBackground')).not.toHaveStyle('color: #9B4428');
        expect(react_2.screen.getByTestId('resealableText')).toHaveStyle('background-color: #9B4428');
        expect(react_2.screen.getByTestId('resealableText')).not.toHaveStyle('background-color: #F9BB38');
    });
    test('should change colors of title h1 element and button on mouse out', () => {
        (0, react_2.render)(react_1.default.createElement(Landing_1.default, null), { wrapper: react_router_dom_1.BrowserRouter });
        react_2.fireEvent.mouseOut(react_2.screen.getByText(/get answers/i));
        expect(react_2.screen.getByTestId('resealableTextBackground')).toHaveStyle('background-color: #F9BB38');
        expect(react_2.screen.getByTestId('resealableTextBackground')).not.toHaveStyle('background-color: #9B4428');
        expect(react_2.screen.getByTestId('resealableTextBackground')).toHaveStyle('color: #9B4428');
        expect(react_2.screen.getByTestId('resealableTextBackground')).not.toHaveStyle('color: #F9BB38');
        expect(react_2.screen.getByTestId('resealableText')).toHaveStyle('background-color: #F9BB38');
        expect(react_2.screen.getByTestId('resealableText')).not.toHaveStyle('background-color: #9B4428');
    });
    test('redirects to the correct destination when the button is clicked', () => {
        (0, react_2.render)(react_1.default.createElement(Landing_1.default, null), { wrapper: react_router_dom_1.BrowserRouter });
        react_2.fireEvent.click(react_2.screen.getByText(/get answers/i));
        expect(window.location.pathname).toBe('/bacon-main');
    });
    test('applies the correct styles to the elements', () => {
        (0, react_2.render)(react_1.default.createElement(Landing_1.default, null), { wrapper: react_router_dom_1.BrowserRouter });
        expect(react_2.screen.getByText(/the bacon lovers website/i)).toHaveStyle('display: block');
        expect(react_2.screen.getByText(/is your bacon resealable/i)).toHaveStyle('font-size: 2em');
        expect(react_2.screen.getByText(/after clicking the button/i)).toHaveStyle('font-size: 1.17em');
        expect(react_2.screen.getByText(/get answers/i)).toHaveStyle('padding: 2px 6px 3px 6px');
    });
    test('should fail to render a non-existent text element', () => {
        (0, react_2.render)(react_1.default.createElement(Landing_1.default, null), { wrapper: react_router_dom_1.BrowserRouter });
        expect(() => react_2.screen.getByText(/non-existent element/i)).toThrowError();
    });
    test('should fail to find a non-existent data-testid element', () => {
        (0, react_2.render)(react_1.default.createElement(Landing_1.default, null), { wrapper: react_router_dom_1.BrowserRouter });
        expect(() => react_2.screen.getByTestId('non-existent-element')).toThrowError();
    });
    test('should fail to apply incorrect styles to the elements', () => {
        (0, react_2.render)(react_1.default.createElement(Landing_1.default, null), { wrapper: react_router_dom_1.BrowserRouter });
        expect(react_2.screen.getByText(/the bacon lovers website/i)).not.toHaveStyle('display: flex');
        expect(react_2.screen.getByText(/is your bacon resealable/i)).not.toHaveStyle('font-size: 1em');
        expect(react_2.screen.getByText(/after clicking the button below/i)).not.toHaveStyle('font-size: 1em');
        expect(react_2.screen.getByText(/get answers/i)).not.toHaveStyle('padding: 4px');
    });
});
