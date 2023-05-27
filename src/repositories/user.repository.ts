import { Repository } from "typeorm"
import User from "../models/user.entity"
import { Service, Inject } from "typedi"

@Service()
class UserRepository extends Repository<User> {
    constructor(
        @Inject() repository: Repository<User>
    ) {
        super(repository.target, repository.manager, repository.queryRunner)
    }
}

export default UserRepository