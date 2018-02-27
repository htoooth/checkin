async function getconfig(session) {
  return new Promise(function(resolve, reject) {
    session.post('/client.do?method=getconfig', (err,res,body) => {
      if (err) {
        reject(err)
        return
      }

      resolve(body)
    })
  })
}

module.exports = getconfig
