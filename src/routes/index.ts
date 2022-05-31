import { Router } from "express";
import { userRoutes } from "./user.routes";
import { tagsComplimentsRoutes } from "./tagsCompliments.routes";

const router = Router() 

try {
    router.use("/users", userRoutes)
    router.use("/tagsCompliments", tagsComplimentsRoutes)
} catch (error) {
    console.log(error)
}

export { router }