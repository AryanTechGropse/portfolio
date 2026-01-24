import {
    getAllSelf,
    addSelf,
    updateSelf,
    getSelf
} from "../controllers/selfController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export default async function selfRoutes(router) {
    router.get("/self", { preHandler: authMiddleware }, getAllSelf);
    router.get("/self/:id", { preHandler: authMiddleware }, getSelf);
    router.post("/self", { preHandler: authMiddleware }, addSelf);
    router.put("/self/:id", { preHandler: authMiddleware }, updateSelf);
}
