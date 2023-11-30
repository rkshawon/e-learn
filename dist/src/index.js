"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const http_1 = __importDefault(require("http"));
const env_config_1 = __importDefault(require("../env-config"));
const app = (0, express_1.default)();
const port = env_config_1.default.port || 8001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, compression_1.default)());
const server = http_1.default.createServer(app);
app.get("/", (req, res) => {
    res.send("This is a test route");
});
server.listen(port, () => {
    console.log("Server runnig at", port);
});
