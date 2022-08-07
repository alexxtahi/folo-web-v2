// Get the date of today
export function getTodayDate() {
    let today = new Date();
    return today;
}
// Get the number of days in a month
export function getDaysInMonth(year = getTodayDate().getFullYear(), month = getTodayDate().getMonth()) {
    return new Date(year, month, 0).getDate();
};
// Get the number of days in a year
export function getDaysInYear(year = getTodayDate().getFullYear()) {
    return ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) ? 366 : 365;
}
// Get the difference between two dates
export function dateDiff(date1, date2, resultFormat) {
    const today = getTodayDate();
    const daysInMonth = getDaysInMonth(today.getFullYear(), today.getMonth());
    const daysInYear = getDaysInYear(today.getFullYear());
    // times
    const minute = 60; // 1 min = 60s
    const hour = minute * 60; // 1h = 60 mins
    const day = hour * 24; // 1j = 24h
    const week = day * 7; // 1w = 7j
    const month = day * daysInMonth; // 1mo = 31j
    const year = day * daysInYear; // 1y = 365j
    // Compute with time format
    let difference = Math.abs(date1.getTime() - date2.getTime());
    let results = {
        minutes: Math.floor(difference / (1000 * minute)),
        hours: Math.floor(difference / (1000 * hour)),
        days: Math.floor(difference / (1000 * day)),
        weeks: Math.floor(difference / (1000 * week)),
        months: Math.floor(difference / (1000 * month)),
        years: Math.floor(difference / (1000 * year)),
    };
    // Display
    switch (resultFormat) {
        case 'minutes': return results.minutes + ' mins';
        case 'hours': return results.hours + 'h';
        case 'days': return results.days + 'j';
        case 'weeks': return results.weeks + ' sems';
        case 'months': return results.months + ' mo';
        case 'years': return results.years + ' ans';
        default:
            // minutes
            if (results.minutes < 60) return results.minutes + ' mins'; // less than 1h
            else if (60 <= results.minutes && results.minutes < (60 * 24)) return results.hours + 'h'; // more than 1h
            // hours
            if (results.hours < 24) return results.hours + 'h'; // less than 1j
            else if (24 <= results.hours && results.hours < (24 * 7)) return results.days + 'j'; // more than 1j
            // days
            if (results.days < 7) return results.days + 'j'; // less than 1w
            else if (7 <= results.days && results.days < daysInMonth) return results.weeks + ' sems'; // more than 1w
            // weeks
            else if (daysInMonth <= results.days && results.days < daysInYear) return results.months + ' mo'; // more than 1mo
            // months
            if (results.months < 12) return results.months + ' mo'; // less than 1y
            else if (results.months >= 12) return results.years + ' ans'; // more than 1y
    }
}
// Active sidebar button when the current page is the same as the button
export function activeSidebarButton(btnPath) {
    return btnPath === window.location.pathname ? 'active' : '';
}