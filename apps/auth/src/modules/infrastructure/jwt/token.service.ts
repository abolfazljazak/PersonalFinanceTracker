import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokensPayload } from './types/payload';

@Injectable()
export class TokenService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {}

  async createAccessToken(payload: TokensPayload): Promise<string> {
    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('Jwt.accessTokenSecret'),
      expiresIn: this.configService.get<string>('Jwt.expire'),
    });

    return accessToken;
  }
}
