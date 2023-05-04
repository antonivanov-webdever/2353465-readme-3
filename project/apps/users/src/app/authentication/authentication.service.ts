import {ConflictException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { BlogUserMemoryRepository } from "../blog-user/blog-user-memory.repository";
import {CreateUserDto} from "./dto/create-user.dto";
import {AuthError} from "./authentication.constant";
import {BlogUserEntity} from "../blog-user/blog-user.entity";
import dayjs from "dayjs";
import {LoginUserDto} from "./dto/login-user.dto";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserMemoryRepository
  ) {}

  public async register(dto: CreateUserDto) {
    const {email, firstname, lastname, password} = dto;

    const blogUser = {
      email,
      firstname,
      lastname,
      avatar: '',
      passwordHash: '',
      createdAt: dayjs().unix()
    };

    const existUser = await this.blogUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException(AuthError.AUTH_USER_EXISTS);
    }

    const userEntity = await new BlogUserEntity(blogUser)
      .setPassword(password)

    return this.blogUserRepository
      .create(userEntity);
  }


  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AuthError.AUTH_USER_NOT_FOUND);
    }

    const blogUserEntity = new BlogUserEntity(existUser);
    if (!await blogUserEntity.comparePassword(password)) {
      throw new UnauthorizedException(AuthError.AUTH_USER_PASSWORD_WRONG);
    }

    return blogUserEntity.toObject();
  }

  public async getUser(id: string) {
    return this.blogUserRepository.findById(id);
  }
}
