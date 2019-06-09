const Facade = require('../../lib/facade')
const marriageStatusSchema = require('./schema')

class MarriageStatusFacade extends Facade {}

module.exports = new MarriageStatusFacade('MarriageStatus', marriageStatusSchema)
