import { registerAs } from "@nestjs/config";

export enum ConfigKeys {
  App = "App",
  Jwt = "Jwt",
}

const AppConfig = registerAs(ConfigKeys.App, () => ({
  port: process.env.PORT || 3000,
}));

const JwtConfig = registerAs(ConfigKeys.Jwt, () => ({
  accessTokenSecret: process.env.ACCESS_TOKEN || "defaultAccessTokenSecret",
  expire: process.env.EXPIRE || "1d",
}));

export const configurations = [AppConfig, JwtConfig];
