const Datastore = require('nedb')
const db = new Datastore({
  filename: './db/user.db',
  autoload: true
})

module.exports = db