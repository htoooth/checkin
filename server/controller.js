const service = require('./service')

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
  service.show().then(({
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
  service.edit().then(({
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
  service.remove().then(({
    error,
    result
  }) => {
    if (error) {
      return res.error(error)
    }

    res.success(result)
  }).catch(next)
}

module.exports = {
  list,
  create,
  show,
  edit,
  remove
}