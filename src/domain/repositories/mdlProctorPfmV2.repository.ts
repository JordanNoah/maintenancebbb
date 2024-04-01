import {MdlProctorPfmV2Entity} from "../entities/mdlProctorPfmV2.entity";

export abstract class MdlProctorPfmV2Repository {
    abstract getByUserId(userId: string): Promise<MdlProctorPfmV2Entity | null>
    abstract getById(id:number): Promise<MdlProctorPfmV2Entity | null>
    abstract restartRoom(mdlProctor:MdlProctorPfmV2Entity): Promise<MdlProctorPfmV2Entity>
}