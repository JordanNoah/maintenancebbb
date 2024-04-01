import { Request, Response } from "express";
import {ActionRepository} from "../../domain/repositories/action.repository";

export class ActionController {
    constructor(
        private readonly actionRepository:ActionRepository
    ) {}

    findByUserId = (req: Request, res: Response) => {
        this.actionRepository.findByUserId(req.params.userId).then((mdlProctorPfmV2Entity) => {
            res.json(mdlProctorPfmV2Entity)
        }).catch((error) => {
            res.status(500).json(error)
        })
    }

    restartRoom = (req: Request, res: Response) => {
        console.log(req.body)
        if (!req.body.idRoom){ res.status(400).send("Missing idRoom")}else {
            this.actionRepository.restartRoom(Number(req.body.idRoom)).then((mdlProctorPfmV2Entity) => {
                res.json(mdlProctorPfmV2Entity)
            }).catch((error) => {
                console.log(error)
                res.status(500).json(error)
            })
        }
    }

    recoverRecording = (req: Request, res: Response) => {
        this.actionRepository.recoverRecording(Number(req.body.idRoom)).then((mdlProctorPfmV2Entity) => {
            res.json(mdlProctorPfmV2Entity)
        }).catch((error) => {
            console.log(error)
            res.status(500).json(error.message)
        })
    }

    removeRecording = (req: Request, res: Response) => {
        this.actionRepository.restartRoom(Number(req.body.idRoom)).then((mdlProctorPfmV2Entity) => {
            res.json(mdlProctorPfmV2Entity)
        }).catch((error) => {
            res.status(500).json(error)
        })
    }

    removeFromProctor = (req: Request, res: Response) => {
        this.actionRepository.restartRoom(Number(req.body.idRoom)).then((mdlProctorPfmV2Entity) => {
            res.json(mdlProctorPfmV2Entity)
        }).catch((error) => {
            res.status(500).json(error)
        })
    }
}