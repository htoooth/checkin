const db = require('./db')

class Model {
  constructor() {
    this.db = db
  }
}

module.exports = Model