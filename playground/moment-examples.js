let moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60
// December 31st 1969 @ 11:59pm -> -60


let now = moment();
console.log('Current timestamp', now.unix());

let timestamp = 1485286301;
let currentMoment = moment.unix(timestamp);
console.log('Current moment: ', currentMoment);
console.log('Current moment: ', currentMoment.format('MMM D, YYYY @ HH:mm'));

// January 3rd, 2017 @ 12:13 AM
console.log('Display date and time: ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
