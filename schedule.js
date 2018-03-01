const schedule = require('node-schedule')
const service = require('./server/service')

function scheduleMain() {
  const ruleIn = new schedule.RecurrenceRule()
  ruleIn.hour = 8
  ruleIn.minute = 55

  schedule.scheduleJob(ruleIn, function(){
    service.checkinAll()
  });

  const ruleOut = new schedule.RecurrenceRule()
  ruleOut.hour = 18

  schedule.scheduleJob(ruleOut, function(){
    service.checkoutAll()
  });

  console.log('schedule start')
}

module.exports = {
  start: scheduleMain
}