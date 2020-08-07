// import * as Moment from 'moment';
import Moment from "moment"; 
import { extendMoment } from 'moment-range';

// const moment = extendMoment(Moment);
const moment = extendMoment(Moment as any);

    export function getDates(dateStart : any , dateEnd : any) {

            var dateArr = []; 
            var prevDate : any;
            var nextDate : any;

            prevDate = dateStart;
            nextDate = dateEnd;
            
            prevDate = moment(prevDate).format('YYYY-MM-DD');
            nextDate = moment(nextDate).format('YYYY-MM-DD');

            var start = new Date(prevDate);
            var end = new Date(nextDate);

            while(start <= end){
                var newDate = start.setDate(start.getDate() + 1);
                dateArr.push(moment(start).format('YYYY-MM-DD'));
                start = new Date(newDate);  
            }

            console.log('Dates array: ');
            console.log(dateArr);
            return dateArr;
    }
