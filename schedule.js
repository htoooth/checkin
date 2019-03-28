const schedule = require('node-schedule')
const service = require('./server/service')

function scheduleMain() {
  // 签入
  const ruleIn = new schedule.RecurrenceRule()
  ruleIn.hour = 8
  ruleIn.minute = 30

  // ruleIn.hour = 17
  // ruleIn.minute = 0

  schedule.scheduleJob(ruleIn, function(){
    service.checkinAll()
  });

  // 签出
  const ruleOut = new schedule.RecurrenceRule()
  ruleOut.hour = 18
  ruleOut.minute = 0

  // ruleOut.hour = 17
  // ruleOut.minute = 0
  schedule.scheduleJob(ruleOut, function(){
    service.checkoutAll()
  });

  // 补签
  const ruleStatus = new schedule.RecurrenceRule()
  ruleStatus.hour = 20
  ruleStatus.minute = 0

  schedule.scheduleJob(ruleStatus, function(){
    service.checkstatusAll()
  })

  // service.checkinAll()
  // service.checkoutAll()

  console.log('schedule start')
}

module.exports = {
  start: scheduleMain
}