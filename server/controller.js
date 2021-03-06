const service = require('./service')
const _ = require('lodash')

function list(req, res, next) {
  service.list().then(({
    error,
    result
  }) => {
    if (error) {
      return res.error(error)
    }

    res.success(result)
  }).catch(next)
}

function create(req, res, next) {
  const params = req.body

  if (!params || _.isEmpty(params)) {
    return res.error()
  }

  service.create(params).then(({
    error,
    result
  }) => {
    if (error) {
      return res.error(error)
    }

    res.success(result)
  }).catch(next)
}

function show(req, res, next) {
  const id = req.params.id

  if (!id) {
    return res.error()
  }

  service.show(id).then(({
    error,
    result
  }) => {
    if (error) {
      return res.error(error)
    }

    res.success(result)
  }).catch(next)
}

function edit(req, res, next) {
  const id = req.params.id
  const params = req.body

  if (!id || !params || _.isEmpty(params)) {
    return res.error()
  }

  service.edit(id, params).then(({
    error,
    result
  }) => {
    if (error) {
      return res.error(error)
    }

    res.success(result)
  }).catch(next)
}

function remove(req, res, next) {
  const id = req.params.id

  if (!id) {
    return res.error()
  }

  service.remove(id).then(({
    error,
    result
  }) => {
    if (error) {
      return res.error(error)
    }

    res.success(result)
  }).catch(next)
}

function checkin(req, res, next) {
  const name = req.params.name

  if (!name) {
    return res.error()
  }

  service.checkin(name).then(({error, result}) => {
    if (error) {
      return res.error(error)
    }

    res.success(result)
  })
}

function checkout(req, res, next) {
  const name = req.params.name

  service.checkout(name).then(({error, result}) => {
    if (error) {
      return res.error(error)
    }

    res.success(result)
  })
}

function checkstatus(req, res, next) {
  const name = req.params.name

  service.checkstatus(name).then(({error, result}) => {
    if (error) {
      return res.error(error)
    }

    res.success(result)
  })
}

module.exports = {
  list,
  create,
  show,
  edit,
  remove,
  checkin,
  checkout,
  checkstatus
}