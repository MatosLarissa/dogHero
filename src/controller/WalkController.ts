import { Request, Response } from "express";
import { WalkBusiness } from "../business/WalkBusiness";
import { DogWalkDataBase } from "../data/DogWalk/DogWalkDataBase";
export class WalkController {
    private walkBusiness: WalkBusiness

    constructor() {

        this.walkBusiness = new WalkBusiness(new DogWalkDataBase)
    }

    startWalking = async (req: Request, res: Response) => {
        try {
            const walkId = req.body.walkId

            const result = await this.walkBusiness.startWalk(walkId)

            res.status(200).send(result)

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || "Unexpected Error")
        }
    }

    finishWalking = async (req: Request, res: Response) => {
        try {
            const walkId = req.body.walkId

            const result = await this.walkBusiness.finishWalk(walkId)

            res.status(200).send(result)

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || "Unexpected Error")
        }
    }

    showWalking = async (req: Request, res: Response) => {
        try {
            const walkId = req.body.walkId

            const result = await this.walkBusiness.showWalking(walkId)

            res.status(200).send(result)

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || "Unexpected Error")
        }
    }
}