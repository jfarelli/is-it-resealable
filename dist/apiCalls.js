"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchBaconData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const response = await fetch('http://localhost:8000/');
        const response = yield fetch('https://is-it-resealable-be.vercel.app/');
        if (!response.ok) {
            throw new Error('Something went wrong. Please try again!');
        }
        const json = yield response.json();
        return json;
    }
    catch (error) {
        console.log('ERROR!!!', error);
    }
});
exports.default = fetchBaconData;
