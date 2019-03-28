const request = require('request')

const END_POINT = 'http://holiday-api.leanapp.cn/api/v1/work'

async function getWorkday(date) {
  return new Promise(function(resolve, reject) {
    // request.get(END_POINT, {qs: {date}, json:true}, function(err, res, body) {
    //   if (err) {
    //     reject(err)
    //     return
    //   }

    //   resolve(body)
    // })

    const now = new Date();
    const n = now.getDay();

    // 星期日，星期六
    if ([0, 6].includes(n)) {
      return resolve({
        data: {
          shouldWork: 'N'
        }
      });
    }

    return resolve({
      data: {
        shouldWork: 'Y'
      }
    });
  })
}

module.exports = getWorkday