import * as crypto from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { PrismaService } from 'src/prisma.service';
import * as argon2 from "argon2";

@Injectable()
export class AuthService {
  constructor(private readonly db: PrismaService) {}

  async login(loginData: LoginDto) {
    // Felhasználó lekérdezése az email alapján
    const user = await this.db.user.findUniqueOrThrow({
      where: { email: loginData.email }
    });

    // Ellenőrizzük, hogy a jelszó helyes-e
    if (await argon2.verify(user.password, loginData.password)) {
      // Generálunk egy új token-t
      const token = crypto.randomBytes(64).toString('hex');

      // Új token mentése az adatbázisba
      await this.db.token.create({
        data: {
          token,
          user: { connect: { id: user.id } }
        }
      });

      // A válaszban most már szerepel a felhasználó role-ja is
      return {
        token,
        userid: user.id,
        role: user.role,  // Role hozzáadása a válaszhoz
      };
    } else {
      throw new Error("Wrong password");
    }
  }
}
