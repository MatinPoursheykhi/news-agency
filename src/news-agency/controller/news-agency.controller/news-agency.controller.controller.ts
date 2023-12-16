// purpose of this controller is to define the routes for newsAgency entity
// and also handle the requests and responses through its routes

// pull out needed decorators and methods to handle the requests and responses
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { NewsAgency } from 'src/entities/newsAgency.entity';
import { InsertNewsAgencyDTO, UpdateNewsAgencyDTO } from 'src/news-agency/dtos';
import { NewsAgencyService } from 'src/news-agency/service/news-agency.service/news-agency.service.service';

// in fact the value inside @Controller is the base route
@Controller('news-agency')
export class NewsAgencyController {

    // access to the NewsAgencyService class to use its methods and perform the requests
    constructor(private readonly newsAgency: NewsAgencyService) { }

    // pass the body into the create method inside service to insert a record
    // parameter: body of the newsAgency
    // return: the saved record in database
    @Post()
    create(@Body() body: InsertNewsAgencyDTO) {
        return this.newsAgency.create(body)
    }

    // calling the update method from service
    // parameters: pull out the id from param, for search,
    // and update_body from Body, to be replaced in database
    @Put(':id')
    update(@Param('id') id: string, @Body() update_body: UpdateNewsAgencyDTO) {
        return this.newsAgency.update(id, update_body)
    }

    // calling the delete method from service
    // parameters: pull out the id from param, for search
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.newsAgency.delete(id)
    }

    // calling the findAll method from service
    @Get('list')
    findAll(): Promise<NewsAgency[]> {
        return this.newsAgency.findAll()
    }

    // calling the findByDate from service
    // parameter: pull out the date from param, for search
    @Get('search-by-date/:date') // example: date = 1402,9,25
    findByDate(@Param('date') date: string): Promise<NewsAgency[]> {
        date = date.replaceAll(',', '/') // remove the ',' operator from date and replace '/'
        return this.newsAgency.findByDate(date)
    }

    // calling the findByName from service
    // parameter: pull out the agency_name from param, for search
    @Get('search-by-name/:agencyName')
    findByName(@Param('agencyName') agencyName: string): Promise<NewsAgency[]> {
        return this.newsAgency.findByName(agencyName)
    }

    // calling the findByNameAndDate from service
    // parameter: pull out the agency_name and date from param, for search
    @Get('search-by-date-and-name/:date/:agencyName') // example: date = 1402,9,25
    findByNameAndDate(@Param('agencyName') agencyName: string, @Param('date') date: string): Promise<NewsAgency[]> {
        date = date.replaceAll(',', '/') // remove the ',' operator from date and replace '/'
        return this.newsAgency.findByNameAndDate(date, agencyName)
    }
}