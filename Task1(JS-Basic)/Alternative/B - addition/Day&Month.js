function getNames(date) {
    const days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };

    const months = {
        1 : 'February',
        2 : 'March',
        3 : 'April',
        4 : 'May',
        5 : 'June',
        6 : 'July',
        7 : 'August',
        8 : 'September',
        9 : 'October',
        10 : 'November',
        11 : 'December',
        12 : 'January'
    };

    let day = '';
    let month = '';

    for (let key in days) {
        if(key === date.getDay().toString()) {
            day = days[key];
        }
    }

    for (let key in months) {
        if(key === date.getMonth().toString()) {
            month = months[key];
        }
    }
    return `${month}, ${day}`;
}