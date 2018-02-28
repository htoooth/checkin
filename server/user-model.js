const Model = require('./model')
const Promise = require('bluebird')

const USER_SCHEME = {
  name: '',
  password: '',
  udid: '',
  autoCheckin: '',
  autoCheckout: 　 ''
}

class UserModel extends Model {
  constructor() {
    super()
  }

  async list() {
    return new Promise((resolve, reject) => {
      this.db.find({}, function (err, doc) {
        if (err) {
          return reject(err)
        }

        resolve(doc)
      })
    })
  }

  async findById(id) {
    return new Promise((resolve, reject) => {
      this.db.findOne({
        _id: id
      }, function (err, doc) {
        if (err) {
          return reject(err)
        }

        resolve(doc)
      })
    })
  }

  async insert(doc) {
    return new Promise((resolve, reject) => {
      this.db.insert(doc, function (err, newDoc) {
        if (err) {
          return reject(err)
        }

        resolve(newDoc)
      })
    })
  }

  async update(id, doc) {
    console.log(id, doc)
    return new Promise((resolve, reject) => {
      this.db.update({
        _id: id
      }, doc, {}, function (err, numAffected) {
        if (err) {
          return reject(err)
        }

        resolve(numAffected)
      })
    })
  }

  async remove(id) {
    return new Promise((resolve, reject) => {
      this.db.remove({
        _id: id
      }, {
        returnUpdatedDocs: true
      }, function (err, numAffected, affectedDocuments) {
        if (err) {
          return reject(err)
        }

        resolve(affectedDocuments)
      })
    })
  }
}

module.exports = UserModel