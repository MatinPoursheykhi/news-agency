// the purpose of this service is to create needed functions
// and communicate with database via typeorm methods for newsAgency entity

// ** text for reader: nestJs will handle all the types via typescript
// and also it handles most of the errors through its PIPEs
// that's why there is no need to write many exceptions;
// you cam go to the main.ts module **

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsAgency } from 'src/entities/newsAgency.entity';
import { InsertNewsAgencyDTO, UpdateNewsAgencyDTO } from 'src/news-agency/dtos';
import { Repository } from 'typeorm';

@Injectable()
export class NewsAgencyService {

    // use an instance of NewsAgency class to access the repository and typeorm methods
    constructor(@InjectRepository(NewsAgency) private newsAgencyRepo: Repository<NewsAgency>) { }

    // insert a new record of newsAgency in database
    // parameter: news_agency_body used to create the instance object from it
    // return: the saved record in database or BadRequestException 
    create(news_agency_body: InsertNewsAgencyDTO) {
        const news_agency_instance = this.newsAgencyRepo.create(news_agency_body)
        const is_news_agency_instance_empty = Object.keys(news_agency_instance).length === 0
        if (is_news_agency_instance_empty)
            return new BadRequestException(`failed to create an instance of newsAgency`)
        // save the instance inside database and return it
        return this.newsAgencyRepo.save(news_agency_instance)
    }

    // parameters: id for search, and update_body
    // return: the number of affected records
    async update(id: string, update_body: UpdateNewsAgencyDTO) {
        return await this.newsAgencyRepo.update({ id }, update_body);
    }

    // parameters: id for search
    // return: the number of affected records
    async delete(id: string) {
        return await this.newsAgencyRepo.delete({ id });
    }

    // find all the records and return them
    async findAll(): Promise<NewsAgency[]> {
        return await this.newsAgencyRepo.find()
    }

    // search for records with the same date
    // return: founded related records
    async findByDate(date: string): Promise<NewsAgency[]> {
        return await this.newsAgencyRepo.find({ where: { date } })
    }

    // search for records with the same agencyName
    // return: founded related records
    async findByName(agencyName: string): Promise<NewsAgency[]> {
        return await this.newsAgencyRepo.find({ where: { agencyName } })
    }

    // search for records with the same agencyName and date
    // return: founded related records
    async findByNameAndDate(date: string, agencyName: string): Promise<NewsAgency[]> {
        return await this.newsAgencyRepo.find({ where: { date, agencyName } })
    }
}