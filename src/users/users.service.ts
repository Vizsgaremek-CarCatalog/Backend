import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config'; // Import ConfigService
import { cars, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
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
      const data = { ...updateUserDto };
  
      // Ha van új jelszó, titkosítsuk
      if (data.password) {
        data.password = await argon2.hash(data.password);
      }
  
      return await this.db.user.update({
        data,
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


// Fetch user's favorite cars
async getUserFavorites(userId: number): Promise<cars[]> {
  const favorites = await this.prisma.favorite.findMany({
    where: { userId },
    include: { car: true },
  });
  return favorites.map((fav) => fav.car);
}

// Add a car to user's favorites
async addFavorite(userId: number, carId: number): Promise<cars> {
  const favorite = await this.prisma.favorite.create({
    data: {
      userId,
      carId,
    },
    include: { car: true },
  });
  return favorite.car;
}

// Remove a car from user's favorites
async removeFavorite(userId: number, carId: number): Promise<void> {
  await this.prisma.favorite.deleteMany({
    where: {
      userId,
      carId,
    },
  });
}
  
async changePassword(
  userId: number,
  currentPassword: string,
  newPassword: string,
  confirmPassword: string
): Promise<boolean> {
  if (newPassword !== confirmPassword) {
    throw new Error('Passwords do not match');
  }

  const user = await this.db.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await argon2.verify(user.password, currentPassword);
  if (!isPasswordValid) {
    throw new Error('Invalid current password');
  }

  const hashedNewPassword = await argon2.hash(newPassword);
  await this.db.user.update({
    where: { id: userId },
    data: { password: hashedNewPassword },
  });

  return true;
}



}