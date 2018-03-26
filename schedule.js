const schedule = require('node-schedule')
const service = require('./server/service')

function scheduleMain() {
  const ruleIn = new schedule.RecurrenceRule()
  // ruleIn.hour = 8
  // ruleIn.minute = 40

  ruleIn.hour = 17
  ruleIn.minute = 0

  schedule.scheduleJob(ruleIn, function(){
    service.checkinAll()
  });

  const ruleOut = new schedule.RecurrenceRule()
  // ruleOut.hour = 18
  // ruleOUt.minute = 0

  ruleOut.hour = 17
  ruleOUt.minute = 0
  schedule.scheduleJob(ruleOut, function(){
    service.checkoutAll()
  });

  // service.checkinAll()
  // service.checkoutAll()

  console.log('schedule start')
}

module.exports = {
  start: scheduleMain
}