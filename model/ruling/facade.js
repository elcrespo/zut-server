const Facade = require('../../lib/facade')
const rulingSchema = require('./schema')

class RulingFacade extends Facade {}

module.exports = new RulingFacade('Ruling', rulingSchema)