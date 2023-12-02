import express from "express";
import bootcampRoutes from "../controllers/bootcamp/routes";

const router = express.Router();

const apiRoutes = [
  {
    api_route: "/bootcamp",
    path: bootcampRoutes,
  },
];

apiRoutes.forEach((routes) => router.use(routes.api_route, routes.path));
export default router;
