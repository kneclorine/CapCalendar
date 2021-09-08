import { DateService } from "../../services/dateservice";
import { BaseDateComponent } from "../basedatecomponent";
import { DayButtons } from "../component";

export class CalendarDays extends BaseDateComponent{
    
    connectedCallback() {
        let days = DateService.getMonthDays();
        days.forEach(element => {
            let day = document.createElement('cap-day');
        });
    }
    

}