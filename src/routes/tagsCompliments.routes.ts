import { Router } from "express"
import { createTag } from "../modules/TagsCompliments/controllers/CreateTags"
import { ensureAdmin } from "../middlewares/EnsureAdmins"
import { createCompliment } from "../modules/TagsCompliments/controllers/CreateCompliments"
import { ensureAuthenticated } from "../middlewares/EnsureAuhenticated"

import { listTags } from "../modules/TagsCompliments/controllers/ListTags"
import { listCompliments } from "../modules/TagsCompliments/controllers/ListCompliments"

const tagsComplimentsRoutes = Router()

tagsComplimentsRoutes.post("/tags", ensureAuthenticated, /*ensureAdmin,*/ createTag.handle)
tagsComplimentsRoutes.post("/compliments", ensureAuthenticated, createCompliment.handle)

tagsComplimentsRoutes.get("/tags", listTags.handle)
tagsComplimentsRoutes.get("/compliments", listCompliments.handle)

export { tagsComplimentsRoutes }