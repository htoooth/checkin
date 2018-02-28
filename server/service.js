const UserModel = require('./user-model')

const userModel = new UserModel()

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

module.exports = {
  list,
  create,
  show,
  edit,
  remove
}