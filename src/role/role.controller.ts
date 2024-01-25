import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('role')
export class RoleController {
    constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

    @Get("getAll")
    getAllRoles() {
      return this.client.send({ cmd: 'get_all_roles' }, {});
    }
  
    @Get(':id')
    getRoleByID(@Param('id') id) {
      return this.client.send({ cmd: 'get_roleby_id' }, id);
    }
  
    @Post("create")
    createNewRole(@Body() role: any) {
      return this.client.send({ cmd: 'create_role' }, role);
    }


}
