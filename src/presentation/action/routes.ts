import {Router} from "express";
import {ActionDatasourceImpl} from "../../infrastructure/datasource/action.datasource.impl";
import {ActionRepositoryImpl} from "../../infrastructure/repositories/action.repository.impl";
import {ActionController} from "./controller";

export class ActionRoutes {
    static get routes(): Router {
        const router = Router();
        const datasource = new ActionDatasourceImpl()
        const actionRepository = new ActionRepositoryImpl(datasource)

        const controller = new ActionController(actionRepository)
        router.get('/userId/:userId', controller.findByUserId)
        router.post('/restartRoom', controller.restartRoom)
        router.post('/recoverRecording', controller.recoverRecording)
        router.post('/removeRecording', controller.removeRecording)
        router.post('/removeFromProctor', controller.removeFromProctor)

        return router
    }
}