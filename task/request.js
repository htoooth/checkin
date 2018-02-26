const request = require('request').defaults({
  jar: true,
  baseUrl: 'http://oa.yoho.cn:89'
})

module.exports = request