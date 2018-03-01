const webServer = require('./server')
const schedule = require('./schedule')
const config = require('./config/common')

const PORT = config.port

schedule.start()

webServer.listen(PORT, function() {
  console.log('server start at', PORT)
})