const Facade = require('../../lib/facade');
const bcrypt = require('bcryptjs');
const userSchema = require('./schema');

class UserFacade extends Facade {
    async authenticate({ username, password }) {
        const user = await super.findOne({ username });
        if (user && bcrypt.compareSync(password, user.hash)) {
            const { hash, ...userWithoutHash } = user.toObject();
            const token = jwt.sign({ sub: user.id }, config.secret);
            return {
                ...userWithoutHash,
                token
            };
        }
    }

    findById (...args) {
        return super.Model
          .findById(...args)
          .select('-hash')
          .exec()
    }

    async update(id, userParam) {
        const user = await super.findById(id);
    
        // validate
        if (!user) throw 'User not found';
        if (user.username !== userParam.username && await super.findOne({ username: userParam.username })) {
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
}

module.exports = new UserFacade('User', userSchema)
