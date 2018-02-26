const getconfig = require('./task/getconfig')
const login = require('./task/login')
const checkin = require('./task/checkin')

async function main() {
  const res1 = await getconfig()
  const {sessionkey} = await login()
  const res2 = await checkin({sessionkey})
  console.log('签到成功',res2)
}

main().catch(err => console.log(err))