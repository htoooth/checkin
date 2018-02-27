const getconfig = require('./task/getconfig')
const login = require('./task/login')
const checkout = require('./task/checkout')
const holiday = require('./task/holiday')
const moment = require('moment')

async function main() {
  const today = moment().format('YYYY-MM-DD')
  const {data: {shouldWork}} = await holiday(today)

  if (shouldWork !== 'Y') {
    console.log(`${today} 不工作`)
    return
  }

  console.log(`${today} 工作`)
  const res1 = await getconfig()
  const {sessionkey} = await login()
  const res2 = await checkout({sessionkey})
  console.log(`${today} 签出成功 ${res2}`)
}

main().catch(err => console.log(err))