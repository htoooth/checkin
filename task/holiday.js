const request = require('request')

const END_POINT = 'http://holiday-api.leanapp.cn/api/v1/work'

async function getWorkday(date) {
  return new Promise(function(resolve, reject) {
    request.get(END_POINT, {qs: {date}}, function(err, res, body) {
      if (err) {
        reject(err)
        return
      }

      resolve(body)
    })
  })
}

module.exports = getWorkday