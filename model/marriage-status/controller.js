const Controller = require('../../lib/controller')
const marriageStatusFacade = require('./facade')

class MarriageStatusController extends Controller {}

module.exports = new MarriageStatusController(marriageStatusFacade)
