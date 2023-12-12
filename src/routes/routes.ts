import express from "express";
import bootcampRoutes from "../controllers/bootcamp/routes";
import courseRoutes from "../controllers/course/routes";
import userRoutes from "../controllers/user/routes";
import reviewRoutes from "../controllers/review/routes";
import authRoutes from "../controllers/auth/routes";

const router = express.Router();

const apiRoutes = [
  {
    api_route: "/auth",
    path: authRoutes,
  },
  {
    api_route: "/bootcamp",
    path: bootcampRoutes,
  },
  {
    api_route: "/course",
    path: courseRoutes,
  },
  {
    api_route: "/user",
    path: userRoutes,
  },
  {
    api_route: "/review",
    path: reviewRoutes,
  },
];

apiRoutes.forEach((routes) => router.use(routes.api_route, routes.path));
export default router;
