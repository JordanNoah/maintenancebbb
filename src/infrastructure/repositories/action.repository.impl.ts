import {ActionRepository} from "../../domain/repositories/action.repository";
import {ActionDatasource} from "../../domain/datasources/action.datasource";
import {MdlProctorPfmV2Entity} from "../../domain/entities/mdlProctorPfmV2.entity";

export class ActionRepositoryImpl implements ActionRepository {
    constructor(
        private readonly actionDatasource:ActionDatasource
    ) {}

    findByUserId(userId: string): Promise<MdlProctorPfmV2Entity | null> {
        return this.actionDatasource.findByUserId(userId)
    }

    restartRoom(id: number): Promise<MdlProctorPfmV2Entity> {
        return this.actionDatasource.restartRoom(id)
    }

    recoverRecording(id: number): Promise<MdlProctorPfmV2Entity> {
        return this.actionDatasource.recoverRecording(id)
    }

    removeRecording(id: number): Promise<MdlProctorPfmV2Entity> {
        return this.actionDatasource.removeRecording(id)
    }

    removeFromProctor(id: number): Promise<MdlProctorPfmV2Entity> {
        return this.actionDatasource.removeFromProctor(id)
    }
}