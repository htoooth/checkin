const getconfig = require('../task/getconfig')
const login = require('../task/login')
const checkout = require('../task/checkout')
const holiday = require('../task/holiday')
const checkstatus = require('../task/checkstatus')
const request = require('../task/request')
const logger = require('./log-model')

const moment = require('moment')
const cheerio = require('cheerio')

const dateTimeReg = /[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9] [0-9]{2}:[0-9]{2}:[0-9]{2}/g
const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss'
const dateFormat = 'YYYY-MM-DD'

function parse(html) {
  const $ = cheerio.load(html)
  const result = $('div[class=listitem]').text()
  const s = result.match(dateTimeReg)
  return s
}

function getCheckoutDate() {
  return moment().format(dateFormat)
}

function compareTime(t) {
  const checkoutTime = moment(`${getCheckoutDate()} 18:30:00`, dateTimeFormat)
  const time = moment(t, dateTimeFormat)

  return time.isAfter(checkoutTime)
}

function isCheckout(timeList) {
  return timeList.some(t => {
    if (compareTime(t)) {
      return true
    }
  })
}

async function checkstatusMain(user) {
  const today = moment().format('YYYY-MM-DD')
  const {data: {shouldWork}} = await holiday(today)

  if (shouldWork !== 'Y') {
    console.log(`${today} 不工作`)
    return
  }

  console.log(`${today} 工作`)
  const session = request.session()
  const res1 = await getconfig(session)
  const {sessionkey} = await login(session, user)
  console.log(`${today} 得到session ${sessionkey}`)

  if (!sessionkey) {
    logger.log({name: user.loginid, message: '用户名，密码或设备id 错误，请改正', createdAt: moment().format('YYYY-MM-DD HH:mm:ss')})
    return '用户名，密码或设备id 错误，请改正'
  }

  const res2 = await checkstatus(session, {})

  const dateTimeList = parse(res2)

  if (!isCheckout(dateTimeList)) {
    logger.log({name: user.loginid, message: `未签到，现在补签`, createdAt: moment().format('YYYY-MM-DD HH:mm:ss')})
    const result = await checkout(session, {sessionkey})
    logger.log({name: user.loginid, message: `补签签出成功 ${JSON.stringify(result)}`, createdAt: moment().format('YYYY-MM-DD HH:mm:ss')})
  }

  return dateTimeList
}

module.exports = checkstatusMain