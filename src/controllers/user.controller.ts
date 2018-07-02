import { get, param, requestBody, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { Class, Repository, RepositoryMixin, juggler} from'@loopback/repository';
import { User } from "../models/user";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class UserController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @get("/users")
  async getAllUsers(
  ): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @get("/user/{userid}")
  async getSpecificUser(
    @param.path.string("userId") userId: string
  ): Promise<any> {
    var userArr = await this.getAllUsers();
    for (var i =  0; i < userArr.length; i++) {
      var current = userArr[i];
      if (current.username == userId) {
        return current;
      }
    }
  }

  @post("/users")
  async createUser(
    @requestBody() user : User
  ): Promise<User> {
    let createdUser = await this.userRepo.create(user);
    return createdUser;
  }
}
