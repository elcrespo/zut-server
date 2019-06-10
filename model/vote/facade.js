const Facade = require('../../lib/facade')
const voteSchema = require('./schema')
const mongoose = require('mongoose');


class VoteFacade extends Facade {
    findyByUserId({userId}) {
        return this.Model.aggregate([
            { $match: { user: new mongoose.mongo.ObjectId(userId) } },
            {
                $group: {
                    _id: "$vote",
                    count: { $sum: 1 }
                }
            }
        ]).exec();
    }

    findByRulingId({rulingId}) {
        return this.Model.aggregate([
            { $match: { ruling: new mongoose.mongo.ObjectId(rulingId) } },
            {
                $group: {
                    _id: "$vote",
                    count: { $sum: 1 }
                }
            }
        ]).exec();
    }

    findByUserAndRuling({userId, rulingId}) {
        return this.Model.aggregate([
            { $match: { ruling: new mongoose.mongo.ObjectId(rulingId), user: new mongoose.mongo.ObjectId(userId) } },
            {
                $group: {
                    _id: "$vote",
                    count: { $sum: 1 }
                }
            }
        ]).exec();
    }
}

module.exports = new VoteFacade('Vote', voteSchema)
