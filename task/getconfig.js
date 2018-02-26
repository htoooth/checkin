const request = require('./request')

async function getconfig() {
  return new Promise(function(resolve, reject) {
    request.post('/client.do?method=getconfig', (err,res,body) => {
      if (err) {
        reject(err)
        return
      }

      resolve(body)
    })
  })
}

module.exports = getconfig
