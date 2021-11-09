import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    console.log('hello');

    return ['mama', 'papa'];
  }
}
