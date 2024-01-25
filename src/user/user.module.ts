import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { RoleController } from 'src/role/role.controller';

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [{ provide: 'USER_SERVICE', inject: [ConfigService], 
    useFactory: (configService: ConfigService) => {
       return ClientProxyFactory.create({ transport: Transport.TCP, options: { host: configService.get('USER_SERVICE_HOST'), 
       port: configService.get('USER_SERVICE_PORT'), 
      }, 
    }); 
  }, 
  },],
    controllers: [UserController,RoleController],
  })
export class UserModule {}
