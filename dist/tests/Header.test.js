"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("../components/Header"));
describe('Header', () => {
    it('renders the header with default styles when not scrolled', () => {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Header_1.default, { scrolled: false })));
        const headerElement = react_2.screen.getByRole('heading');
        const linkElement = react_2.screen.getByRole('link', {
            name: /is your bacon resealable\?\?\?/i,
        });
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveClass('text-center bg-[#F9BB38] text-2xl sm:text-4xl hover:cursor-pointer');
        expect(headerElement).not.toHaveClass('shadow-sm shadow-gray-700');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/');
        react_2.fireEvent.mouseEnter(linkElement);
        expect(window.location.pathname).toBe('/');
    });
    it('renders the header with additional styles when scrolled', () => {
        (0, react_2.render)(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(Header_1.default, { scrolled: true })));
        const headerComponent = react_2.screen.getByTestId('header-element');
        const headerElement = react_2.screen.getByRole('heading');
        const linkElement = react_2.screen.getByRole('link', {
            name: /is your bacon resealable\?\?\?/i,
        });
        expect(headerComponent).toBeInTheDocument();
        expect(headerComponent).toHaveClass('bg-[#F9BB38] text-[#9B4428] h-16 z-10 flex items-center justify-center drop-shadow-2xl fixed top-0 left-0 right-0 font-bold shadow-sm shadow-gray-700');
        expect(headerElement).toHaveClass('text-center bg-[#F9BB38] text-2xl sm:text-4xl hover:cursor-pointer');
        expect(headerElement).toBeInTheDocument();
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/');
        react_2.fireEvent.mouseEnter(linkElement);
        expect(window.location.pathname).toBe('/');
    });
});
