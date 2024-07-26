// findMatching: Returns an array of driver names that match the provided string, case insensitive.
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}
    
// fuzzyMatch: Returns an array of driver names that start with the provided string.
function fuzzyMatch(drivers, query) {
return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
// matchName: Returns an array of driver objects where the name property matches the provided string.
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}