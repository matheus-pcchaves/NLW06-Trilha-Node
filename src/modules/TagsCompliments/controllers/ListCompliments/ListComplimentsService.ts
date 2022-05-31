import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../../../../repositories/ComplimentsRepositories";

class ListComplimentsService{
    async execute(){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories)

        const compliments = await complimentsRepository.find()

        return classToPlain(compliments)
    }
}

export { ListComplimentsService }