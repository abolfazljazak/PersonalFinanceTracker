import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  async hashPassword(password: string): Promise<string> {
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
  }

  async validatePassword(
    password: string,
    hashPassword: string
  ): Promise<boolean> {
    const validPassowrd = await bcrypt.compare(password, hashPassword);
    return validPassowrd;
  }
}
