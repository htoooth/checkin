const getconfig = require('../task/getconfig')
const login = require('../task/login')
const checkin = require('../task/checkin')
const holiday = require('../task/holiday')
const request = require('../task/request')
const moment = require('moment')

const logger = require('./log-model')

async function checkinMain(user) {
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

  const res2 = await checkin(session, {sessionkey})

  res2.result = '签到成功'
  console.log(`${today} 签到成功 ${JSON.stringify(res2)}`)
  logger.log({name: user.loginid, message: `签到成功 ${JSON.stringify(res2)}`, createdAt: moment().format('YYYY-MM-DD HH:mm:ss')})

  return res2
}

module.exports = checkinMain