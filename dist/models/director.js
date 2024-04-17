"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.directorSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.directorSchema = new mongoose_1.default.Schema({
    name: String,
    birthDate: Date,
    biography: String,
});
const directorModel = mongoose_1.default.model("director", exports.directorSchema);
exports.default = directorModel;
