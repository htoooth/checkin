const Datastore = require('nedb')
const db = new Datastore('../db/user.db')

module.exports = db