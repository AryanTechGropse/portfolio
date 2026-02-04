import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  getAll,
  getProjects,
  addProjects,
  updateProjects,
  deleteProjects,
} from "../controllers/projects.controller.js";

export default async function projectsRoutes(router) {
  router.get("/projects", { preHandler: authMiddleware }, getAll);
  router.get("/projects/:id", { preHandler: authMiddleware }, getProjects);
  router.post("/projects", { preHandler: authMiddleware }, addProjects);
  router.put("/projects/:id", { preHandler: authMiddleware }, updateProjects);
  router.delete("/projects/:id", { preHandler: authMiddleware }, deleteProjects);
}
