import express, { Application } from 'express';
import bodyParser from 'body-parser';
import "reflect-metadata";
import cors from 'cors';
import { Controller } from './controller/search.controller';
import * as swagger from "swagger-express-ts";
import { SwaggerDefinitionConstant } from "swagger-express-ts";

class App {
  public app: Application;
  public searchController: Controller;

  constructor() {
    this.app = express();
    this.setConfig();

    this.searchController = new Controller(this.app);
  }

  private setConfig() {
    //Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: '2mb' }));

    //Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: '2mb', extended:true}));

    //Enables cors   
    this.app.use(cors());

    this.app.use( '/api-docs/swagger' , express.static( 'swagger' ) );
    this.app.use( '/api-docs/swagger/assets' , express.static( 'node_modules/swagger-ui-dist' ) );
    this.app.use( bodyParser.json() );
    this.app.use( swagger.express(
        {
            definition : {
                info : {
                    title : "backend - ranking city" ,
                    version : "1.0"
                } ,
                
                // Models can be defined here
            }
        }
    ) );
    
    this.app.use( ( err : Error , request : express.Request , response : express.Response , next : express.NextFunction ) => {
      console.error( err.stack );
      response.status( 500 ).send( "Something broke!" );
    } );

  }
  
}

export default new App().app;