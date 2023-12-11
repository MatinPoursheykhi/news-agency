import { Module } from '@nestjs/common';
import { NewsAgencyModule } from './news-agency/news-agency.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // communicate with sqlite database via typeorm
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db1.sqlite',
    synchronize: true,
    entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  }),
    // existed modules
    NewsAgencyModule],
})
export class AppModule { }
