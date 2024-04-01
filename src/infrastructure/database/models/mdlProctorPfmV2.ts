import {DataTypes, Model} from "sequelize";
import {sequelize} from "../sequelize";

interface MdlProctorPfmV2Row {
    id: number,
    id_usuario: string,
    id_programa: string,
    id_sala: string,
    num_grabaciones: number,
    recordingIDs: string,
    aceptado: boolean,
    time: number
}

export class MdlProctorPfmV2Sequelize extends Model<MdlProctorPfmV2Row, Omit<MdlProctorPfmV2Row, 'id'>> {
    declare id: number
    declare id_usuario: string
    declare id_programa: string
    declare id_sala: string
    declare num_grabaciones: number
    declare recordingIDs: string
    declare aceptado: boolean
    declare time: number
}

MdlProctorPfmV2Sequelize.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_usuario:{
        type: DataTypes.STRING,
        allowNull: true
    },
    id_programa:{
        type: DataTypes.STRING,
        allowNull: true
    },
    id_sala:{
        type: DataTypes.STRING,
        allowNull: true
    },
    num_grabaciones:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    recordingIDs:{
        type: DataTypes.STRING,
        allowNull: true
    },
    aceptado:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    time:{
        type: DataTypes.BIGINT,
        allowNull: false
    }
},{
    tableName:'mdl_proctor_pfm_v2',
    sequelize,
    timestamps:false
})