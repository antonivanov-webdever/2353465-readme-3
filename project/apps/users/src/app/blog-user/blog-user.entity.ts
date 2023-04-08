import {User} from "@project/shared/shared-types";

export class BlogUserEntity implements User {
  public _id?: string;
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;
  public avatar?: string;
  public createdAt: number;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(blogUser: User) {
    this._id = blogUser._id;
    this.email = blogUser.email;
    this.firstname = blogUser.firstname;
    this.lastname = blogUser.lastname;
    this.passwordHash = blogUser.passwordHash;
    this.avatar = blogUser.avatar;
    this.createdAt = blogUser.createdAt;
  }
}
