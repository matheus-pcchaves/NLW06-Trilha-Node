import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken";

interface IPayLoad{
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authtoken = request.headers.authorization;

    if(!authtoken){
        return response.status(401).end()
    }

    const [, token] = authtoken.split(" ")

    try {
        const { sub } = verify( token, "42a0e91c68a8a59a19a6530d9e15c812") as IPayLoad

        request.user_id = sub
        return next()
    } catch (error) {
        return response.status(401).end()
    }
}