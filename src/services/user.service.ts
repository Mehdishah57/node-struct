import { Service, Inject } from "typedi"
import UserRepository from "../repositories/user.repository"

@Service()
class UserService {
    constructor(
        @Inject() private readonly userRepo: UserRepository
    ) {}

    public async getUser() {
        return await this.userRepo.findOneBy({ firstName: '' })
    }
}

export default UserService