const data = {
  "method": "login",
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

async function login(session, params) {
  return new Promise(function(resolve, reject) {
    session.post('/client.do', {
      form: Object.assign({}, data, params),
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