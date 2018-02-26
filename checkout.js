const getconfig = require('./task/getconfig')
const login = require('./task/login')
const checkout = require('./task/checkout')

async function main() {
  const res1 = await getconfig()
  const {sessionkey} = await login()
  const res2 = await checkout({sessionkey})
  console.log('签出成功',res2)
}

main().catch(err => console.log(err))