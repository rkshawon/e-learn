"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../controllers/bootcamp/routes"));
const routes_2 = __importDefault(require("../controllers/course/routes"));
const routes_3 = __importDefault(require("../controllers/user/routes"));
const routes_4 = __importDefault(require("../controllers/review/routes"));
const routes_5 = __importDefault(require("../controllers/auth/routes"));
const router = express_1.default.Router();
const apiRoutes = [
    {
        api_route: "/auth",
        path: routes_5.default,
    },
    {
        api_route: "/bootcamp",
        path: routes_1.default,
    },
    {
        api_route: "/course",
        path: routes_2.default,
    },
    {
        api_route: "/user",
        path: routes_3.default,
    },
    {
        api_route: "/review",
        path: routes_4.default,
    },
];
apiRoutes.forEach((routes) => router.use(routes.api_route, routes.path));
exports.default = router;
