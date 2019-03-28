const moment = require('moment')

function getDate() {
  return {
    checkDate: moment().format('YYYY-MM-DD'),
    resourceId: 2224
  }
}

async function checkstatus(session, params) {
  return new Promise(function(resolve, reject) {
    session.get('/mobile/plugin/zjb/SignResultData.jsp', {qs: Object.assign({}, getDate(), params)}, function(err, res, body) {
      if (err) {
        reject(err)
        return
      }

      resolve(body)
    })
  })
}

module.exports = checkstatus