import { get, param, requestBody, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { Class, Repository, RepositoryMixin, juggler } from '@loopback/repository';
import { User } from "../models/user";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class UserController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get("/users")
  async getAllUsers(
    @param.query.string("username") username: string
  ): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @get("/user/userid")
  getSpecificUser(
    @param.path.string("userId") userId: string
  ): any {


    return "Not found";

  }

  @post("/users")
  async createUser(
    @requestBody() user: User
  ): Promise<User> {
    let createdUser = await this.userRepo.create(user);
    return createdUser;
  }
}
