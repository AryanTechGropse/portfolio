import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  getAllAbout,
  getAbout,
  addAbout,
  updateAbout,
  deleteAbout,
} from "../controllers/about.controller.js";

export default async function aboutRoutes(router) {
  router.get("/about", { preHandler: authMiddleware }, getAllAbout);
  router.get("/about/:id", { preHandler: authMiddleware }, getAbout);
  router.post("/about", { preHandler: authMiddleware }, addAbout);
  router.put("/about/:id", { preHandler: authMiddleware }, updateAbout);
  router.delete("/about/:id", { preHandler: authMiddleware }, deleteAbout);
}
