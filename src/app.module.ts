import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { OffersController } from './offers/offers.controller';
import { OffersService } from './offers/offers.service';
import { OffersModule } from './offers/offers.module';
import { WishesController } from './wishes/wishes.controller';
import { WishesService } from './wishes/wishes.service';
import { WishesModule } from './wishes/wishes.module';
import { WishlistlistsController } from './wishlistlists/wishlistlists.controller';
import { WishlistlistsService } from './wishlistlists/wishlistlists.service';
import { WishlistlistsModule } from './wishlistlists/wishlistlists.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [UsersModule, OffersModule, WishesModule, WishlistlistsModule, AuthModule],
  controllers: [AppController, UsersController, OffersController, WishesController, WishlistlistsController, AuthController],
  providers: [AppService, OffersService, WishesService, WishlistlistsService, AuthService],
})
export class AppModule {}
