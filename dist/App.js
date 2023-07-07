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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const apiCalls_1 = require("./apiCalls");
const Landing_1 = __importDefault(require("./components/Landing"));
const Header_1 = __importDefault(require("./components/Header"));
const BaconHolder_1 = __importDefault(require("./components/BaconHolder"));
const BaconBits_1 = __importDefault(require("./components/BaconBits"));
const LoadingSpinner_1 = __importDefault(require("./components/LoadingSpinner"));
const App = () => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [data, setData] = (0, react_1.useState)([]);
    const [selectedBacon, setSelectedBacon] = (0, react_1.useState)();
    const [scrolled, setScrolled] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setLoading(true);
        (0, apiCalls_1.fetchBaconData)()
            .then(({ data }) => {
            setData(data);
        })
            .finally(() => {
            setLoading(false);
        });
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const displayBaconDetails = (id) => {
        if (data) {
            const foundBacon = data.find((bacon) => {
                let stringBacon = bacon.id.toString();
                return stringBacon === id;
            });
            setSelectedBacon(foundBacon);
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Landing_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "bacon-main", element: loading ? (react_1.default.createElement("h1", null,
                    react_1.default.createElement(LoadingSpinner_1.default, null))) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Header_1.default, { scrolled: scrolled }),
                    react_1.default.createElement(BaconHolder_1.default, { data: data, displayBaconDetails: displayBaconDetails }))) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "bacon-bits", element: loading ? (react_1.default.createElement("h1", null, "Loading...")) : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Header_1.default, { scrolled: scrolled }),
                    react_1.default.createElement(BaconBits_1.default, { selectedBacon: selectedBacon }))) }))));
};
exports.default = App;
