const data = {
  "method": "login",
  "loginid": "tao.huang",
  "password": "huangtao3.1415926",
  "udid": "868233033762392",
  "isneedmoulds": 1,
  "client": 1,
  "clientver": "6.5.38",
  "clientos": "NMF26X",
  "clientosver": "7.1.1",
  "clienttype": "android",
  "language": "en",
  "country": "US",
  "relogin": 1
}

async function login(session) {
  return new Promise(function(resolve, reject) {
    session.post('/client.do', {
      form: data,
      json: true,
    }, function(err, res, body) {
      if (err) {
        reject(err)
        return
      }

      resolve(body)
    })
  })
}

module.exports = login