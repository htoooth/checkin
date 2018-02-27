const schedule = require('node-schedule')
const checkin = require('./checkin')
const checkout = require('./checkout')

function main() {
  const ruleIn = new schedule.RecurrenceRule()
  ruleIn.hour = 9

  schedule.scheduleJob(ruleIn, function(){
    checkin()
  });

  const ruleOut = new schedule.RecurrenceRule()
  ruleOut.hour = 18

  schedule.scheduleJob(ruleOut, function(){
    checkout()
  });
}

main()