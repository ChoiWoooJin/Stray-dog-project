import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dog/dogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  ormconfig from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { StrayDogsModule } from './dogs/straydogs/straydogs.module';
import { LostDogsModule } from './dogs/lostdogs/lost.module';
import { AdoptedDogsModule } from './dogs/adopteddog/adopteddog.module';
import { DeadDogsModule } from './dogs/deaddog/deaddog.module';
import { UrgentDogModule } from './dogs/urgentdog/urgentdog.module';

@Module({
  imports: [
    DogsModule,
    StrayDogsModule,
    LostDogsModule,
    AdoptedDogsModule,
    DeadDogsModule ,
    ConfigModule.forRoot({
      envFilePath: ['./development.env'],
    }),
    TypeOrmModule.forRoot(ormconfig),
    UrgentDogModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
