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
const session_1 = __importDefault(require("../models/session"));
const router = (0, express_1.Router)();
/**
 * Get all sessions
 * @route GET /api/v1/sessions
 * @returns array of sessions
 */
router.get("/", (req, res) => {
    const query = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let result = yield session_1.default.find({});
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
 * Get session by id
 * @route GET /api/v1/sessions/:id
 * @returns session
 */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    if (!id) {
        res.status(400).send("Invalid id");
    }
    else {
        const query = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let result = yield session_1.default.findById(id).exec();
                if (!result) {
                    res.status(404).send("Session not found");
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
 * Create new session
 * @route POST /api/v1/sessions
 * @returns created session
 */
router.post("/", (req, res) => {
    let document = new session_1.default(req.body);
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
 * Update session
 * @route PUT /api/v1/sessions/:id
 * @returns updated session
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
                const result = yield session_1.default.findByIdAndUpdate(id, req.body, {
                    returnDocument: "after",
                });
                if (!result) {
                    res.status(404).send("Session not found");
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
 * Delete session
 * @route DELETE /api/v1/sessions/:id
 * @returns deleted session
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
                const result = yield session_1.default.findByIdAndDelete(id);
                if (!result) {
                    res.status(404).send("Session not found");
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
