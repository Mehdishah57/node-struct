import User from "../models/user.entity"
import { Resolver, Query } from "type-graphql"
import { Inject } from "typedi"
import UserService from "../services/user.service"

@Resolver()
class UserResolver {
    constructor(
        @Inject() private readonly userService: UserService
    ) {}

    @Query(() => User)
    async user() {
        this.userService.getUser()
    }
}

export default UserResolver