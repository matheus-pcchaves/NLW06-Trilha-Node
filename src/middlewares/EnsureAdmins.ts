import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){

    const { user_id } = request
    console.log(user_id)

    const usersRepository = getCustomRepository(UsersRepositories)

    const { admin } = await usersRepository.findOne(user_id)

    //Verificar se usuário admin
    if(admin){
        return next()
    }

    return response.status(401).json({
        error: "Unautorized"
    })
}