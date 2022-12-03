function lineDateToArray(lineDate) {
    return lineDate.split("-");
}

export function getDay(lineDate) {
    return lineDateToArray(lineDate)[2];
}

export function getMonth(lineDate) {
    return lineDateToArray(lineDate)[1];
}

export function getYear(lineDate) {
    return lineDateToArray(lineDate)[0];
}

export function getTime(lineDate) {
    return lineDate.substring(11, 16);
}