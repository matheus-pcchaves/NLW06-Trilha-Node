import { Router } from "express"
import { createUserController } from "../modules/Users/Controller/CreateUser"
import { authenticateUserController } from "../modules/Users/Controller/AuthenticateUser"
import { listUserSendComplimentsController } from "../modules/Users/Controller/ListUserSender" 
import { listUserReceiveComplimentsController } from "../modules/Users/Controller/ListUserReceiver"
import { listUsersController } from "../modules/Users/Controller/ListUser"
import { ensureAuthenticated } from "../middlewares/EnsureAuhenticated"

const userRoutes = Router()

userRoutes.post("/createUsers", createUserController.handle)
userRoutes.post("/login", authenticateUserController.handle)
userRoutes.get("/users/compliments/send", listUserSendComplimentsController.handle)
userRoutes.get("/users/compliments/receive", listUserReceiveComplimentsController.handle)
userRoutes.get("/listUsers", ensureAuthenticated, listUsersController.handle)

export { userRoutes }