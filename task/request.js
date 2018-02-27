class Request {
  static session() {
    const request = require('request').defaults({
      jar: true,
      baseUrl: 'http://oa.yoho.cn:89'
    })

    return request
  }
}

module.exports = Request