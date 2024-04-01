import {MdlProctorPfmV2Entity} from "../entities/mdlProctorPfmV2.entity";

export abstract class ActionRepository {
    abstract findByUserId(userId:string): Promise<MdlProctorPfmV2Entity|null>
    abstract restartRoom(id:number): Promise<MdlProctorPfmV2Entity>
    abstract recoverRecording(id:number): Promise<MdlProctorPfmV2Entity>
    abstract removeRecording(id:number): Promise<MdlProctorPfmV2Entity>
    abstract removeFromProctor(id:number): Promise<MdlProctorPfmV2Entity>
}