export class FormatService{

    static getTime(date){
        var options = {hour: 'numeric', minute: 'numeric', second: 'numeric'};
        return new Intl.DateTimeFormat('es-ES',options).format(date);
    }

    static getDate(date){
        var options ={weekday:"long",  year: 'numeric', month: 'long', day: 'numeric'};
        return new Intl.DateTimeFormat('es-ES',options).format(date);
    }

    static getDateMonth(date){
        var options = { year: 'numeric', month: 'long'};
        return new Intl.DateTimeFormat('es-ES',options).format(date);
    }

    static getSelectedDate(date){
        let today = new Date();
        if(today.getDate() === date.getDate() & today.getMonth()===date.getMonth() & today.getFullYear() === date.getFullYear()){
            return "Today";
        }else{
            var options = {weekday:'long', day:'numeric'};
            return new Intl.DateTimeFormat('es-ES',options).format(date);
        }
    }
}