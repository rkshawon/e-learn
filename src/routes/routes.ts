import express from "express";
import bootcampRoutes from "../controllers/bootcamp/routes";
import courseRoutes from "../controllers/course/routes";

const router = express.Router();

const apiRoutes = [
  {
    api_route: "/bootcamp",
    path: bootcampRoutes,
  },
  {
    api_route: "/course",
    path: courseRoutes,
  },
];

apiRoutes.forEach((routes) => router.use(routes.api_route, routes.path));
export default router;
