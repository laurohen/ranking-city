import { Request, Response } from "express";
import {httpPost, interfaces, requestParam} from 'inversify-express-utils';
import { ApiOperationPost} from "swagger-express-ts";
import { arrayDates, getDates } from './date.service';

export class SearchService {

  public static TARGET_NAME: string = "VersionController";
  
  public initMessage(req: Request, res: Response) {
    return res.status(200).send("Welcome to ranking city - API REST");
  }

  @ApiOperationPost({
    description: 'Post user object',
    parameters: {
        body: {
            description: 'Pot new user',
            model: 'User',
            required: true,
        },
    },
    responses : {
      200 : { description : "Success" },
      400 : { description : "Parameters fail" }
    },
    summary: 'Post new user',
  })
  @httpPost( "/" )
  public search(req: Request, res: Response) {
    console.log(req.query);

    let UF = req.query.state;
    let dateStart = req.query.dateStart;
    let dateEnd = req.query.dateEnd;

    let x = getDates(dateStart, dateEnd);
    console.log(x);
    
  }

}