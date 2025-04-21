import { Module } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { PrismaService } from "nestjs-prisma";

@Module({
    providers: [UserRepository, PrismaService]
})
export class PersistanceModule {}