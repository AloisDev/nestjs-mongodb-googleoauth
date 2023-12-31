import { Controller, Get, Post, Body } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { User } from './schemas/user.schema'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto)
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }
}