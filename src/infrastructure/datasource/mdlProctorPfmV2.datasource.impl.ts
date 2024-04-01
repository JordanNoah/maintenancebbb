import {MdlProctorPfmV2Datasource} from "../../domain/datasources/mdlProctorPfmV2.datasource";
import {MdlProctorPfmV2Entity} from "../../domain/entities/mdlProctorPfmV2.entity";
import {CustomError} from "../../domain/errors/custom.error";
import {MdlProctorPfmV2Sequelize} from "../database/models/mdlProctorPfmV2";
import {MdlProctorPfmV2Repository} from "../../domain/repositories/mdlProctorPfmV2.repository";

export class MdlProctorPfmV2DatasourceImpl implements MdlProctorPfmV2Datasource {
    async getByUserId(userId: string): Promise<MdlProctorPfmV2Entity | null> {
        try {
            return  await MdlProctorPfmV2Sequelize.findOne({
                where:{
                    id_usuario: userId
                }
            })
        }catch (error){
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    async getById(id: number): Promise<MdlProctorPfmV2Entity | null> {
        try {
            return await MdlProctorPfmV2Sequelize.findOne({
                where:{
                    id: id
                }
            })
        }catch (error){
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    async restartRoom(mdlProctor: MdlProctorPfmV2Entity): Promise<MdlProctorPfmV2Entity> {
        try {
            await MdlProctorPfmV2Sequelize.update({
                aceptado: false
            },{
                where:{
                    id: mdlProctor.id
                }
            })
            mdlProctor.aceptado = false
            return mdlProctor
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }
}