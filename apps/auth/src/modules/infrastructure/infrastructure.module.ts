import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PasswordService } from './services/password.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt/strategy/jwt.strategy';
import { InfrastructureService } from './infrastructure.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('Jwt.accessTokenSecret'),
        signOptions: {
          expiresIn: configService.get<string>('Jwt.expire'),
        },
      }),
    }),
  ],
  providers: [
    JwtService,
    PasswordService,
    ConfigService,
    JwtStrategy,
    InfrastructureService,
  ],
  exports: [InfrastructureService],
})
export class InfrastructureModule {}
