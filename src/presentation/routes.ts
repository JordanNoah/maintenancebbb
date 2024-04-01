import {Router} from "express";
import {ActionRoutes} from "./action/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router()

        router.use('/api/action', ActionRoutes.routes)

        return router
    }
}