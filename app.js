const webServer = require('./server')
const schedule = require('./schedule')

const PORT = 80

schedule.start()

webServer.listen(PORT, function() {
  console.log('server start at', port)
})