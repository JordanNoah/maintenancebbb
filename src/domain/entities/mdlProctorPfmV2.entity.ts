export class MdlProctorPfmV2Entity {
    constructor(
        public id: number,
        public id_usuario: string,
        public id_programa: string,
        public id_sala: string,
        public num_grabaciones: number,
        public recordingIDs: string,
        public aceptado: boolean,
        public time: number
    ) {}
}