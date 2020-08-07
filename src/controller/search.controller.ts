import 'reflect-metadata';
import { Application } from 'express';
import { SearchService } from '../services/search.service';
import {controller, httpGet, httpPost, interfaces} from 'inversify-express-utils';
import { ApiOperationPost} from "swagger-express-ts";

export class Controller {
  private searchService: SearchService;

  constructor(private app: Application) {
    this.searchService = new SearchService();
    this.routes();
  }

  public routes() {
    this.app.route('/info').get(this.searchService.initMessage);

    this.app.route("/").post(this.searchService.search);

  }
}