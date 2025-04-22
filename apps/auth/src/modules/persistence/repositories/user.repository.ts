import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ConflictMessage, ServerErrorMessage } from '@painless/enums/message.enum';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private async userExists(email: string) {
    return this.prisma.user.findUnique({ email });
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const { email, hashPassword } = createUserDto;
      const userExists = this.userExists(email);
      if (userExists)
        throw new ConflictException(ConflictMessage.UserAlreadyExists);

      const user = this.prisma.user.create({
        email,
        hashPassword,
      });

      return user;
    } catch (error) { // eslint-disable-line
      throw new InternalServerErrorException(ServerErrorMessage.InternalError)
    }
  }

  async findByEmail(email: string) {
    return this.userExists(email)
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({ id })
  }
}
