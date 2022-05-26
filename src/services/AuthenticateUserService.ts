import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest{
    email: string,
    password: string
}

class AuthenticateUserService{
    async execute({email, password}: IAuthenticateRequest){
        const usersRepository = getCustomRepository(UsersRepositories)

        const user = await usersRepository.findOne({
            email
        })

        if(!user){
            throw new Error("Email/password incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/password incorrect")
        }

        const token = sign({
            email: user.email
        }, "42a0e91c68a8a59a19a6530d9e15c812", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }
}

export { AuthenticateUserService }