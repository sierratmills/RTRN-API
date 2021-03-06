import { get, param, requestBody, post, HttpErrors, put } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { Class, Repository, RepositoryMixin, juggler } from '@loopback/repository';
import { User } from "../models/user";
import { sign, verify } from 'jsonwebtoken';
var bcrypt = require('bcryptjs');


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class UserController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get("/verify")
  verifyToken(@param.query.string("jwt") jwt: string) {

    try {
      let payload = verify(jwt, "shh");
      console.log(payload);
      return payload;
    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid token");
    }

    // The user is authenticated and we can process...
  }

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
    for (var i = 0; i < userArr.length; i++) {
      var current = userArr[i];
      if (current.username == userId) {
        return current;
      }
    }
  }

  @post("/register")
  async registerUser(
    @requestBody() user: User
  ): Promise<User> {
    if (!user.email || !user.password || !user.username || !user.firstname || !user.lastname) {
      throw new HttpErrors.BadRequest('user is missing data');
    }
    if (await this.userRepo.count({ email: user.email })) {
      throw new HttpErrors.BadRequest('user already exists');
    }
    if (await this.userRepo.count({ username: user.username })) {
      throw new HttpErrors.BadRequest('username already exists');
    }

    let hashedPassword = await bcrypt.hash(user.password, 10);
    var userToStore = new User();
    userToStore.id = user.id;
    userToStore.firstname = user.firstname;
    userToStore.lastname = user.lastname;
    userToStore.email = user.email;
    userToStore.password = hashedPassword;
    userToStore.username = user.username;
    return await this.userRepo.create(userToStore);
  }

  @post('/login')
  async loginUser(@requestBody() user: User) {
    // Check that email and password are both supplied
    if (!user.email || !user.password) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    // Check that email and password are valid
    let userExists: boolean = !(await this.userRepo.count({
      and: [
        { email: user.email },
        { password: user.password },
      ],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    let foundUser = await this.userRepo.findOne({
      where: {
        and: [
          { email: user.email }
        ],
      },
    }) as User;

    if (!await bcrypt.compare(user.password, foundUser.password)) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    let jwt = sign({
      user: {
        id: foundUser.id,
        email: foundUser.email,
        firstname: foundUser.firstname,
        lastname: foundUser.lastname,
        username: foundUser.username
      }
    },
      "shh",
      {
        issuer: "auth.ix.com",
        audience: "ix.com"
      });

    return {
      token: jwt
    };
  }

  @put('/editprofile')
  async editUserInfo(@requestBody() user: User, @param.query.string("jwt") jwt: string) {
    var payload;
    try {
      payload = verify(jwt, "shh") as any;

    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid token");
    }

    let foundUser = await this.userRepo.findOne({
      where: {
        and: [
         { id: payload.user.id },
        ],
      },
    }) as User;

    if (user.firstname != "") {
      foundUser.firstname = user.firstname;
    }
    if (user.lastname != "") {
      foundUser.lastname = user.lastname;
    }
    if (user.email != "") {
      if (await this.userRepo.count({ email: user.email })) {
        throw new HttpErrors.BadRequest('email already taken');
      } else {
        foundUser.email = user.email;
      }
    }
    if (user.username != "") {
      if (await this.userRepo.count({ username: user.username })) {
        throw new HttpErrors.BadRequest('username already taken');
      } else {
        foundUser.username = user.username;
      }
    }

    this.userRepo.save(foundUser);

  }
}
