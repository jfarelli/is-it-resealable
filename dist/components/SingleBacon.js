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
        const target = e.target;
        resealable === '❌' ? boo() : cheer();
        displayBaconDetails(parseInt(target.id, 10));
    };
    return (react_1.default.createElement("div", { className: "flex flex-col items-center text-center w-[22%] h-[23em] shadow-sm shadow-gray-900 transition duration-270 ease-in-out rounded-2xl hover:shadow-md hover:shadow-gray-900", "data-testid": "singleBacon" },
        react_1.default.createElement("img", { src: `http://localhost:8000/images/${image}`, alt: `${companyName} ${baconStyle} Bacon`, className: "h-60 object-contain rounded-tl-2xl rounded-tr-2xl" }),
        react_1.default.createElement("h3", { "data-testid": "company-name", className: "font-bold text-lg" }, companyName),
        react_1.default.createElement("p", { className: "italic" }, baconStyle),
        react_1.default.createElement("p", { className: "font-bold" },
            "IS IT RESEALABLE? ",
            resealable),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/bacon-bits" },
            react_1.default.createElement("button", { id: id, onClick: handleSelectedBacon, className: "w-auto h-[2.5em] text-md flex items-center justify-center mb-2 p-4" },
                companyName,
                "'s Details"))));
};
exports.default = SingleBacon;
