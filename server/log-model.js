const Datastore = require('nedb')
const db = new Datastore({
  filename: './db/log.db',
  autoload: true
})

class LogModel {
  constructor() {
    this.db = db
  }

  log(doc) {
    return new Promise((resolve, reject) => {
      this.db.insert(doc, function (err, newDoc) {
        if (err) {
          return reject(err)
        }

        resolve(newDoc)
      })
    })
  }
}

module.exports = new LogModel()