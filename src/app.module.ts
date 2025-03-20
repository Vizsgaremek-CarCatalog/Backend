import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarcatalogModule } from './carcatalog/carcatalog.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule

@Module({
  imports: [
    CarcatalogModule,
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }), // Load environment variables globally
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}