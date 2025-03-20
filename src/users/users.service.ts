import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config'; // Import ConfigService

@Injectable()
export class UsersService {
  constructor(
    private readonly db: PrismaService,
    private readonly configService: ConfigService, // Inject ConfigService
  ) {}

  async create(createUserDto: CreateUserDto) {
    // Check if the user is registering as admin by validating the admin password
    if (createUserDto.role === 'ADMIN') {
      const adminPassword = this.configService.get<string>('ADMIN_PASSWORD'); // Get admin password from environment
      if (createUserDto.adminPassword !== adminPassword) {
        throw new Error('Invalid admin password'); // Throw an error if the admin password is incorrect
      }
    }

    // Hash the user password
    const hashedPw = await argon2.hash(createUserDto.password);

    // Create the user in the database
    const user = await this.db.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPw,
        role: createUserDto.role || 'USER', // Default to 'USER' if no role provided
      },
    });

    // Remove the password field from the response for security
    delete user.password;
    return user;
  }

  // Get all users
  findAll() {
    return this.db.user.findMany();
  }

  // Get a specific user by ID
  findOne(id: number) {
    return this.db.user.findUnique({ where: { id } });
  }

  // Update user data
  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.db.user.update({
        data: updateUserDto,
        where: { id },
      });
    } catch {
      return undefined; // If an error occurs (e.g., user not found), return undefined
    }
  }

  // Delete user by ID
  async remove(id: number) {
    try {
      await this.db.user.delete({
        where: { id },
      });
      return true;
    } catch {
      return false;
    }
  }

  // Get user by their token
  async getUserByToken(token: string) {
    const tokenObj = await this.db.token.findUnique({
      where: { token },
      include: { user: true },
    });
    if (!tokenObj) return null;

    const user = tokenObj.user;
    delete user.password; // Remove password for security
    return user;
  }
}