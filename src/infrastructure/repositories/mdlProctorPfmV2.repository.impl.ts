import {MdlProctorPfmV2Entity} from "../../domain/entities/mdlProctorPfmV2.entity";
import {MdlProctorPfmV2Repository} from "../../domain/repositories/mdlProctorPfmV2.repository";
import {MdlProctorPfmV2Datasource} from "../../domain/datasources/mdlProctorPfmV2.datasource";

export class MdlProctorPfmV2RepositoryImpl implements MdlProctorPfmV2Repository{
    constructor(
        private readonly mdlProctorPfmV2Datasource: MdlProctorPfmV2Datasource
    ) {}

    getByUserId(userId: string): Promise<MdlProctorPfmV2Entity | null> {
        return this.mdlProctorPfmV2Datasource.getByUserId(userId)
    }
    getById(id: number): Promise<MdlProctorPfmV2Entity | null> {
        return this.mdlProctorPfmV2Datasource.getById(id)
    }
    restartRoom(mdlProctor: MdlProctorPfmV2Entity): Promise<MdlProctorPfmV2Entity> {
        return this.mdlProctorPfmV2Datasource.restartRoom(mdlProctor)
    }
}