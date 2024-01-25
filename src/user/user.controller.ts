import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('user')
export class UserController {
    constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

    @Get("getAll")
    getAllUsers() {
      return this.client.send({ cmd: 'get_all_users' }, {});
    }
  
    @Get(':id')
    getUserByID(@Param('id') id) {
      return this.client.send({ cmd: 'get_userby_id' }, id);
    }

    @Get('')
    getUserAny(@Query() data:any) {
      return this.client.send({ cmd: 'get_userby_any' }, data);
    }
  
    @Post("register")
    createNewUser(@Body() user: any) {
      return this.client.send({ cmd: 'register' }, user);
    }

    @Delete("delete/:id")
    deleteNewUser(@Param('id') id) {
      return this.client.send({ cmd: 'delete_user' }, id);
    }

    @Put("update/:id")
    updateUser(@Param('id') id,@Body() user: any) {
      let d = {id,user}
      return this.client.send({ cmd: 'update_user' },d);
    }

    @Post("aggregation")
    aggregation(@Body() user: any) {
      return this.client.send({ cmd: 'aggregation' }, user);
    }

    @Post("login")
    Userlogin(@Body() user: any) {
      return this.client.send({ cmd: 'login' }, user);
    }

}
