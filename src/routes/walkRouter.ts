import express from 'express'
import { WalkController } from '../controller/WalkController'

export const walkRouter = express.Router()

const walkController = new WalkController()

walkRouter.post("/start-walking", walkController.startWalking)
walkRouter.post("/finish-walking",walkController.finishWalking)
walkRouter.get("/tour-duration", walkController.showWalking)