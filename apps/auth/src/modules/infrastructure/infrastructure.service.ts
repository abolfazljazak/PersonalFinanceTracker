import { Injectable } from '@nestjs/common';
import { TokenService } from './jwt/token.service';
import { PasswordService } from './services/password.service';
import { TokensPayload } from './jwt/types/payload';

@Injectable()
export class InfrastructureService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly passwordService: PasswordService
  ) {}

  async createAccessToken(payload: TokensPayload): Promise<string> {
    return this.tokenService.createAccessToken(payload)
  }

  async hashPassword(password: string): Promise<string> {
    return this.passwordService.hashPassword(password)
  }

  async validatePassword(password: string, hashPassword: string): Promise<boolean> {
    return this.passwordService.validatePassword(password, hashPassword)
  }
}
