import { get, param, requestBody, post, HttpErrors } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { UserController } from "./user.controller";
import { User } from "../models/user";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class LoginController {

  constructor(
    @repository(UserRepository) protected userRepo: UserRepository,
  ) { }

  @get("/login")
  async loginUser(@requestBody() user: User
  ): Promise<User> {
    if (!this.userRepo.count({
      and: [
        { email: user.email },
        { password: user.password },
      ],
    })) {
      throw new HttpErrors.Unauthorized('invalid information');
    }

    //return await user;
    return await this.userRepo.findOne({
      where: {
        and: [
          { email: user.email },
          { password: user.password }
        ],
      },
    }) as User;
  }
}

