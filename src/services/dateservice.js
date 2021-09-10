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

export class DateService {
    static getMonthDays(date) {
        const calendarDays = [];
        let firstCalendarDay = getFirstCalendarDay(date);
        let i;
        for (i = 0; i < 42; i++) {
            calendarDays.push(firstCalendarDay);
            firstCalendarDay.setDate(firstCalendarDay.getDate() + 1);
        }
        return calendarDays;
    }

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
}
