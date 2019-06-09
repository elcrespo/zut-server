const Controller = require('../../lib/controller')
const voteFacade = require('./facade')

class VoteController extends Controller {
    findyByUserId(req, res, next) {
        return this.facade.findyByUserId(req.body)
        .then(votes => res.status(200).json(votes))
        .catch(err => next(err))
    }

    findByRulingId(req, res, next) {
        return this.facade.findByRulingId(req.body)
        .then(votes => res.status(200).json(votes))
        .catch(err => next(err))
    }

    findByUserAndRuling(req, res, next) {
        return this.facade.findByUserAndRuling(req.params)
        .then(votes => res.status(200).json(votes))
        .catch(err => next(err))
    }
}

module.exports = new VoteController(voteFacade)
