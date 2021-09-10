import { Day } from "../components/daybuttons/day.js";

export class DateService {
    static addMonth(date, diff) {
        let newDate = date;
        newDate.setMonth(date.getMonth() + diff);
        return this.getMonthDays(newDate);
    }
    static isToday(date, today) {
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }
    static isSameMonth(date, today) {
        return date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
    }
    static getMonthDays(date) {
        function getFirstDayOfMonth(date) {
            let newDate = new Date(date);
            newDate.setDate(1);
            return newDate;
        } 
        function getFirstCalendarDay(date) {
            let firstCalendarDay = getFirstDayOfMonth(date);
            while (firstCalendarDay.getDay() != 1) {
                firstCalendarDay.setDate(firstCalendarDay.getDate() - 1);
            }
            return firstCalendarDay;
        }
        function getCalendarDays(date) {
            const calendarDays = [];
            const today = new Date();
            const firstCalendarDay = getFirstCalendarDay(date);
            //let fecha = firstCalendarDay;
            let i;
            for (i = 0; i < 42; i++) {
                let fecha = new Date(firstCalendarDay);
                calendarDays.push({
                    date: fecha,
                    isToday: DateService.isToday(firstCalendarDay,today),
                    isMonth: DateService.isSameMonth(firstCalendarDay, today),
                    isSelected: false
                });
                firstCalendarDay.setDate(firstCalendarDay.getDate() + 1);
            }
            return calendarDays;
        }
        return getCalendarDays(date);
    }

    
}
