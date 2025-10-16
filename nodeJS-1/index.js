const { format, addDays, subDays, add } = require("date-fns");

const now = new Date();
console.log("Today is:", format(now, "yyyy-MM-dd"));

const nextWeek = addDays(now, 7);
console.log("Next Week is:", format(nextWeek, "yyyy-MM-dd"));

const previousWeek = subDays(now, 7);
console.log("Previous Week is:", format(previousWeek, "yyyy-MM-dd"));
