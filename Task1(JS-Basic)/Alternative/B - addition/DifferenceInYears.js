function differenceInYears(firstDate, secondDate) {
    const parsedDifference = Date.parse(firstDate) - Date.parse(secondDate) > 0
                             ? Date.parse(firstDate) - Date.parse(secondDate) : Date.parse(secondDate) - Date.parse(firstDate);

    const secondDifference = parsedDifference / 1000;
    const minutesDifference = secondDifference / 60;
    const hoursDifference = minutesDifference / 60; 
    const daysDifference = hoursDifference / 24;
    const yearsDifference = daysDifference / 365;

    return Math.floor(yearsDifference);
}

console.log(differenceInYears(new Date(2014, 10, 2), new Date(2016, 10, 2)));