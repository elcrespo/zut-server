const Controller = require('../../lib/controller')
const userFacade = require('./facade')

class UserController extends Controller {
    authenticate(req, res, next) {
        userFacade.authenticate(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
            .catch(err => next(err));
    }

    register(req, res, next) {
        userFacade.create(req.body)
            .then(() => res.json({}))
            .catch(err => next(err));
    }
}

module.exports = new UserController(userFacade)
