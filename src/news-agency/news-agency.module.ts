// purpose of this module is to gather all the modules and specify the accessibility
// of thier importation and exportation

import { Module } from '@nestjs/common';
import { NewsAgencyController } from './controller/news-agency.controller/news-agency.controller.controller';
import { NewsAgencyService } from './service/news-agency.service/news-agency.service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsAgency } from '../entities/newsAgency.entity';

@Module({
  // make a connection between NewsAgency entity to database via TypeOrmModule
  imports: [TypeOrmModule.forFeature([NewsAgency])],

  // make NewsAgencyController accessable among the NewsAgency modules
  controllers: [NewsAgencyController],

  // make NewsAgencyService accessable among the NewsAgency modules
  providers: [NewsAgencyService]
})
export class NewsAgencyModule { }
