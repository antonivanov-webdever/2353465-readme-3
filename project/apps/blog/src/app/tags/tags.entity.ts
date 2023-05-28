import {Tag} from "@project/shared/shared-types";

export class TagsEntity {
  public _id?: string;
  public title: string;

  constructor(tag: Tag) {
    this._id = tag._id;
    this.title = tag.title;
  }

  public toObject() {
    return {
      ...this
    }
  }
}
