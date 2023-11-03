import { ControllerType } from "../common/types"
import adminService from "./admin.service"

const createAdmin: ControllerType = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await adminService.createAdmin(+id)
        res.send({
            message: 'User be Admin',
            user,
        })
    } catch (e) {
        next(e)
    }
}

export default {
    createAdmin   
}