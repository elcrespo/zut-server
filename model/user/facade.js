const Facade = require('../../lib/facade');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userSchema = require('./schema');
const config = require('../../config');

class UserFacade extends Facade {
    async authenticate({ username, password }) {
        const user = await this.findOne({ username });
        if (user && bcrypt.compareSync(password, user.hash)) {
            const { hash, ...userWithoutHash } = user.toObject();
            const token = jwt.sign({ sub: user.id }, config.secretJwtKey, {expiresIn: '48h'});
            return {
                ...userWithoutHash,
                token
            };
        }
    }

    findById (...args) {
        return this.Model
          .findById(...args)
          .select('-hash')
          .exec()
    }

    async update(id, userParam) {
        const user = await this.findById(id);
    
        // validate
        if (!user) throw 'User not found';
        if (user.username !== userParam.username && await this.findOne({ username: userParam.username })) {
            throw 'Username "' + userParam.username + '" is already taken';
        }
    
        // hash password if it was entered
        if (userParam.password) {
            userParam.hash = bcrypt.hashSync(userParam.password, 10);
        }
    
        // copy userParam properties to user
        Object.assign(user, userParam);
    
        await user.save();
    }

    async create(userParam) {
        // validate
        if (await this.findOne({ username: userParam.username })) {
            throw 'Username "' + userParam.username + '" is already taken';
        }
    
        const user = new this.Model(userParam);
    
        // hash password
        if (userParam.password) {
            user.hash = bcrypt.hashSync(userParam.password, 10);
        }
    
        // save user
        await user.save();
    }
    
}

module.exports = new UserFacade('User', userSchema)
