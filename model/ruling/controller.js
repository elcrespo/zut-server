
const Controller = require('../../lib/controller')
const rulingFacade = require('./facade')

class RulingController extends Controller {}

module.exports = new RulingController(rulingFacade)