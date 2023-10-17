import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module'
import { GoogleStrategy } from './auth/strategy/google.strategy'
import { UsersModule } from './users/users.module'


@Module({
  imports: [UsersModule, AuthModule, ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/mongodb')
  ],
  providers: [GoogleStrategy]
})
export class AppModule { }
