import {ActionDatasource} from "../../domain/datasources/action.datasource";
import {MdlProctorPfmV2Entity} from "../../domain/entities/mdlProctorPfmV2.entity";
import {CustomError} from "../../domain/errors/custom.error";
import {MdlProctorPfmV2DatasourceImpl} from "./mdlProctorPfmV2.datasource.impl";
import {SshClient} from "../ssh/init";

export class ActionDatasourceImpl implements ActionDatasource {
    async findByUserId(userId: string): Promise<MdlProctorPfmV2Entity | null> {
        try {
            return await new MdlProctorPfmV2DatasourceImpl().getByUserId(userId)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    async restartRoom(id: number): Promise<MdlProctorPfmV2Entity> {
        try {
            const mdlProctor = await new MdlProctorPfmV2DatasourceImpl().getById(id)
            if (!mdlProctor) throw CustomError.notFound(`Proctor not found ${id}`)

            return await new MdlProctorPfmV2DatasourceImpl().restartRoom(mdlProctor)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    async recoverRecording(id: number): Promise<MdlProctorPfmV2Entity> {
        try {
            const mdlProctor = await new MdlProctorPfmV2DatasourceImpl().getById(id)
            if (!mdlProctor) throw CustomError.notFound(`Proctor not found ${id}`)

            await new SshClient().executeCommand(`sudo mv /var/bigbluebutton/deleted/presentation/${mdlProctor.recordingIDs} /var/bigbluebutton/published/presentation/`).catch((e) => {
                throw CustomError.internalSever(e.message)
            })
            return mdlProctor
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    async removeFromProctor(id: number): Promise<MdlProctorPfmV2Entity> {
        try {
            const mdlProctor = await new MdlProctorPfmV2DatasourceImpl().getById(id)
            if (!mdlProctor) throw CustomError.notFound(`Proctor not found ${id}`)

            await new SshClient().executeCommand('pw').catch((e) => {
                throw CustomError.internalSever(e.message)
            })
            return mdlProctor
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    async removeRecording(id: number): Promise<MdlProctorPfmV2Entity> {
        try {
            const mdlProctor = await new MdlProctorPfmV2DatasourceImpl().getById(id)
            if (!mdlProctor) throw CustomError.notFound(`Proctor not found ${id}`)

            await new SshClient().executeCommand(`sudo mv /var/bigbluebutton/published/presentation/${mdlProctor.recordingIDs} /var/bigbluebutton/deleted/presentation/`).catch((e) => {
                throw CustomError.internalSever(e.message)
            })
            return mdlProctor
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }
}