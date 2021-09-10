import { DateService } from "../../services/dateservice.js";

export class Day{
    
    constructor(){
        let _date = new Date();
        let isHoy = DateService.isToday(date, new Date());
        let isMonth = DateService.isSameMonth(date, new Date());
        let isSelected = false;
    }
    _changeMonth(date){
        this._date = date;
        this.isHoy = DateService.isToday(_date, new Date());
        this.isMonth = DateService.isSameMonth(_date, new Date());
        this.isSelected = false;
    }
    _showDate(){
        return this._date;
    }
}

