"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const film_1 = require("./film");
exports.sessionSchema = new mongoose_1.default.Schema({
    film: film_1.filmSchema,
    date: Date,
    time: String,
    availableSeats: Number,
});
const sessionModel = mongoose_1.default.model("session", exports.sessionSchema);
exports.default = sessionModel;
