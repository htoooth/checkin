const route = require('express').Router()
const controller = require('./controller')

route.get('/', controller.list)
route.post('/', controller.create)
route.get('/:id', controller.show)
route.post('/:id', controller.edit)
route.delete('/:id', controller.remove)
route.get('/:name/checkin', controller.checkin)
route.get('/:name/checkout', controller.checkout)

module.exports = route