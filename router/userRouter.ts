import {Router} from "express"
import { createUser } from "../controller/userController"


const router: Router = Router()

router.route("/create-users").post(createUser)

export default router