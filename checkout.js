const getconfig = require('./task/getconfig')
const login = require('./task/login')
const checkout = require('./task/checkout')
const holiday = require('./task/holiday')
const request = require('./task/request')

const moment = require('moment')

async function main() {
  const today = moment().format('YYYY-MM-DD')
  const {data: {shouldWork}} = await holiday(today)

  if (shouldWork !== 'Y') {
    console.log(`${today} 不工作`)
    return
  }

  console.log(`${today} 工作`)
  const session = request.session()
  const res1 = await getconfig(session)
  const {sessionkey} = await login(session)
  console.log(`${today} 得到session ${sessionkey}`)

  const res2 = await checkout(session, {sessionkey})
  console.log(`${today} 签出成功 ${res2}`)
}

module.exports = main