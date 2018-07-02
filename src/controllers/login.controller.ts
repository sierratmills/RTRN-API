import { get, param, requestBody, post } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { UserController } from "./user.controller";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class LoginController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @get("/user/{userid}")
  async checkValidUser(
    @param.path.string("username") name: string,
    @param.path.string("passcode") passcode: string
  ): Promise<boolean> {
    var userArr = await UserController.prototype.getAllUsers();
    for (var i =  0; i < userArr.length; i++) {
      var current = userArr[i];
      if (current.username == name) {
        if (current.password == passcode) {
            return true;
        }
        else {
            return false;
        }
      }
    }
    return false;
  }


}
