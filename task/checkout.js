const data = {
  method: "checkin",
  type: "checkout",
  latlng: "31.982921,118.733974",
  addr: "%E6%B1%9F%E8%8B%8F%E7%9C%81%E5%8D%97%E4%BA%AC%E5%B8%82%E5%BB%BA%E9%82%BA%E5%8C%BA%E5%88%9B%E6%99%BA%E8%B7%AF24%E5%8F%B7%E9%9D%A0%E8%BF%91%E4%B8%AD%E5%9B%BD%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C(%E5%98%89%E9%99%B5%E6%B1%9F%E4%B8%9C%E8%A1%97%E6%94%AF%E8%A1%8C)",
  sessionkey: "abc14l9XQT_HW61HNFegw",
  wifiMac: "null HTTP/1.1"
}

async function checkout(session, sessionkey) {
  return new Promise(function(resolve, reject) {
    session.get('/client.do', {qs: Object.assign(data, sessionkey), json: true}, function(err, res, body) {
      if (err) {
        reject(err)
        return
      }

      resolve(body)
    })
  })
}

module.exports = checkout