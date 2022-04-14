import express from 'express'
import { CreateController } from '../controller/CreateController'


export const createRouter = express.Router()

const createController = new CreateController()

createRouter.post("/create", createController.createWalk)