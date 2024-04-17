"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const director_1 = require("./director");
exports.filmSchema = new mongoose_1.default.Schema({
    title: String,
    releaseYear: Date,
    genre: String,
    directors: [director_1.directorSchema],
});
const filmModel = mongoose_1.default.model("film", exports.filmSchema);
exports.default = filmModel;
