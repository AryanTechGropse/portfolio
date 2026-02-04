import {
    getAllSelf,
    addSelf,
    updateSelf,
    getSelf,
    deleteSelf
} from "../controllers/self.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export default async function selfRoutes(router) {
    router.get("/self", { preHandler: authMiddleware }, getAllSelf);
    router.get("/self/:id", { preHandler: authMiddleware }, getSelf);
    router.post("/self", { preHandler: authMiddleware }, addSelf);
    router.put("/self/:id", { preHandler: authMiddleware }, updateSelf);
    router.delete("/self/:id", { preHandler: authMiddleware }, deleteSelf);
}
