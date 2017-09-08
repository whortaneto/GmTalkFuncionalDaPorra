const Stop = actualArrival => ({
    actualArrival
});

const stopArray = [Stop(new Date()), Stop(new Date()), Stop(), Stop()];

const dateUpperCase = date => date.toString().toUpperCase();

const applyToStopsDate = callback => stops => stops
    .filter(stop => stop.actualArrival)
    .map(stop => callback(stop.actualArrival));

const stopsDateToUpperCase = applyToStopsDate(dateUpperCase);

const countArrivedStops = stops => stops
    .reduce((count, stop) => stop.actualArrival ? count + 1 : count, 0);

stopsDateToUpperCase(stopArray)
    .forEach(console.log);

console.log(countArrivedStops(stopArray));
