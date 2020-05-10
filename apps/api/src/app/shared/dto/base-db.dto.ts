import { classToPlain } from 'class-transformer';
import { Exclude, Expose, Transform } from 'class-transformer/decorators';

export class BaseDbDto {
  @Expose({ name: 'id' })
  @Transform((value) => value && value.toString())
  _id: string;

  @Exclude()
  __v: number;

  createdAt: string;
  updatedAt: string;

  toJSON() {
    return classToPlain(this);
  }
}

export interface BaseDbDtoCtorInterface {
  _id: string;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}
