import createHttpError from "http-errors"
import prisma from "../prisma/prisma.service"

const createAdmin = async ( userId: number ) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    if(!user){
        throw createHttpError(404, "User not found")
    }

    const admin = await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            role: user.role === 'user' ? 'admin' : 'user',
        }
    })

    return admin
}

export default {
    createAdmin
}