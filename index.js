const schedule = require('node-schedule')
const checkin = require('./checkin')
const checkout = require('./checkout')

function sleep(ms) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const TWENTY_MINUTES = 10 * 60 * 1000

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function main() {
  const ruleIn = new schedule.RecurrenceRule()
  ruleIn.hour = 9

  schedule.scheduleJob(ruleIn, function(){
    sleep(getRandomInt(TWENTY_MINUTES)).then(checkin)
  });

  const ruleOut = new schedule.RecurrenceRule()
  ruleOut.hour = 18

  schedule.scheduleJob(ruleOut, function(){
    sleep(getRandomInt(TWENTY_MINUTES)).then(checkout)
  });

  console.log('checkin start')
}

main()