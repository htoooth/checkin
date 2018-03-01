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

        resolve(doc.map(u => {
          return {
            _id: u._id,
            name: u.name,
            udid: u.udid,
            autoCheckin: u.autoCheckin,
            autoCheckout: u.autoCheckout
          }
        }))
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

  async findByName(name) {
    return new Promise((resolve, reject) => {
      this.db.findOne({
        name: name
      }, function (err, doc) {
        if (err) {
          return reject(err)
        }

        resolve({
          loginid: doc.name,
          password: doc.password,
          udid: doc.udid,
        })
      })
    })
  }

  async findByCheckin() {
    return new Promise((resolve, reject) => {
      this.db.find({
        autoCheckin: 1
      }, function (err, doc) {
        if (err) {
          return reject(err)
        }

        const users = doc.map(u => {
          return {
            loginid: u.name,
            password: u.password,
            udid: u.udid,
          }
        })

        resolve(users)
      })
    })
  }

  async findByCheckout() {
    return new Promise((resolve, reject) => {
      this.db.find({
        autoCheckout: 1
      }, function (err, doc) {
        if (err) {
          return reject(err)
        }

        const users = doc.map(u => {
          return {
            loginid: u.name,
            password: u.password,
            udid: u.udid,
          }
        })

        resolve(users)
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
    return new Promise((resolve, reject) => {
      this.db.update({
        _id: id
      }, {
        $set: doc
      }, {}, function (err, numAffected) {
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