const route = requrie('express').Router()
const constroller = require('./controller')

route.get('/', constroller.list)
route.post('/', controller.create)
route.get('/:id', constroller.show)
route.post('/:id', controller.edit)
route.delete('/:id', controller.remove)

module.exports = route