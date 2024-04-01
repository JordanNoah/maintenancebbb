import {MdlProctorPfmV2Sequelize} from "./models/mdlProctorPfmV2";

export const DbSequelize = (): Promise<void> => {
    return new Promise<void>(async (resolve, reject)=> {
        try {
            await MdlProctorPfmV2Sequelize.sync()
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}