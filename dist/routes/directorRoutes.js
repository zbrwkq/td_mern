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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const director_1 = __importDefault(require("../models/director"));
const router = (0, express_1.Router)();
/**
 * Get all directors
 * @route GET /api/v1/directors
 * @returns array of directors
 */
router.get("/", (req, res) => {
    const query = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let result = yield director_1.default.find({});
            res.status(200).send(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send("Error while getting documents");
        }
    });
    query();
});
/**
 * Get director by id
 * @route GET /api/v1/directors/:id
 * @returns director
 */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).send("Invalid id");
    }
    else {
        const query = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let result = yield director_1.default.findById(id).exec();
                if (!result) {
                    res.status(404).send("Director not found");
                }
                else {
                    res.status(200).send(result);
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).send("Error while getting document");
            }
        });
        query();
    }
});
/**
 * Create director
 * @route POST /api/v1/directors
 * @returns created director
 */
router.post("/", (req, res) => {
    let document = new director_1.default(req.body);
    const query = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let result = yield document.save();
            res.status(200).send(result);
        }
        catch (error) {
            console.log(error);
            res.status(500).send("Error while saving document");
        }
    });
    query();
});
/**
 * Update director
 * @route PUT /api/v1/directors/:id
 * @returns updated director
 */
router.put("/:id", (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400);
        res.send("Invalid id");
    }
    else {
        const query = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const result = yield director_1.default.findByIdAndUpdate(id, req.body, {
                    returnDocument: "after",
                });
                if (!result) {
                    res.status(404).send("Director not found");
                }
                else {
                    res.status(200).send(result);
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).send("Error while updating document");
            }
        });
        query();
    }
});
/**
 * Delete director
 * @route DELETE /api/v1/directors/:id
 * @returns deleted director
 */
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400);
        res.send("Invalid id");
    }
    else {
        const query = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const result = yield director_1.default.findByIdAndDelete(id);
                if (!result) {
                    res.status(404).send("Director not found");
                }
                else {
                    res.status(200).send(result);
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).send("Error while updating document");
            }
        });
        query();
    }
});
exports.default = router;
