"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const use_sound_1 = __importDefault(require("use-sound"));
const boo_mp3_1 = __importDefault(require("../sounds/boo.mp3"));
const cheer_mp3_1 = __importDefault(require("../sounds/cheer.mp3"));
const SingleBacon = ({ id, companyName, baconStyle, resealable, image, displayBaconDetails, }) => {
    const [boo] = (0, use_sound_1.default)(boo_mp3_1.default, { volume: 0.05 });
    const [cheer] = (0, use_sound_1.default)(cheer_mp3_1.default, { volume: 0.05 });
    const handleSelectedBacon = (e) => {
        resealable === '❌' ? boo() : cheer();
        displayBaconDetails(e.currentTarget.id);
    };
    return (react_1.default.createElement("div", { className: "flex flex-col justify-evenly text-center shadow-sm shadow-gray-900 rounded-2xl bg-white h-full", "data-testid": "singleBacon" },
        react_1.default.createElement("img", { src: `https://is-it-resealable-be.vercel.app/images/${image}`, alt: `${companyName} ${baconStyle} Bacon`, className: "single-bacon-cards object-contain h-52 w-full" }),
        react_1.default.createElement("h3", { "data-testid": "company-name", className: "font-bold text-lg" }, companyName),
        react_1.default.createElement("p", { className: "italic" }, baconStyle),
        react_1.default.createElement("p", { className: "font-bold" },
            "IS IT RESEALABLE? ",
            resealable),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/bacon-bits" },
            react_1.default.createElement("button", { id: id.toString(), onClick: handleSelectedBacon, className: "text-md w-[75%] mb-2" },
                companyName,
                "'s Details"))));
};
exports.default = SingleBacon;
