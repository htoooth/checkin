const UserModel = require('./user-model')
const checkinService = require('./checkin-service')
const checkoutService = require('./checkout-service')

const userModel = new UserModel()

function sleep(ms) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const TEN_MINUTES = 10 * 60 * 1000

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function list() {
  const users = await userModel.list()

  return {
    error: null,
    result: users
  }
}

async function create(args) {
  const user = await userModel.insert(args)

  return {
    error: null,
    result: user
  }
}

async function show(id) {
  const user = await userModel.findById(id)

  return {
    error: null,
    result: user
  }
}

async function edit(id, args) {
  const updatedUser = await userModel.update(id, args)

  return {
    error: null,
    result: updatedUser
  }
}

async function remove(id) {
  const removedNum = await userModel.remove(id)

  return {
    error: null,
    result: removedNum
  }
}

async function checkin(name) {
  const user = await userModel.findByName(name)
  const result = await checkinService(user)

  return {
    error: null,
    result
  }
}

async function checkout(name) {
  const user = await userModel.findByName(name)
  const result = await checkoutService(user)

  return {
    error: null,
    result
  }
}

async function checkoutAll() {
  const users = await userModel.findByCheckin()

  for (let u of users) {
    await sleep(getRandomInt(TEN_MINUTES))
    await checkinService(u)
  }
}

async function checkinAll() {
  const users = await userModel.findByCheckout()

  for (let u of users) {
    await sleep(getRandomInt(TEN_MINUTES))
    await checkoutService(u)
  }
}

module.exports = {
  list,
  create,
  show,
  edit,
  remove,
  checkin,
  checkout,
  checkinAll,
  checkoutAll
}