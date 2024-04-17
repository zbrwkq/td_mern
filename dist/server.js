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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const directorRoutes_1 = __importDefault(require("./routes/directorRoutes"));
const filmRoutes_1 = __importDefault(require("./routes/filmRoutes"));
const sessionRoutes_1 = __importDefault(require("./routes/sessionRoutes"));
const uri = "mongodb+srv://user1:KEplL71VMVTGReQ7@cluster0.l27w5f3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
    dbName: "Test",
};
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(uri, clientOptions);
            yield mongoose_1.default.connection.db.admin().command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
        }
        catch (error) {
            console.log(error);
        }
    });
}
run().catch(console.dir);
app.use(express_1.default.json());
app.use("/api/directors", directorRoutes_1.default);
app.use("/api/films", filmRoutes_1.default);
app.use("/api/sessions", sessionRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
