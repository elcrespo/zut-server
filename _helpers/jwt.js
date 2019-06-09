const expressJwt = require('express-jwt');
const config = require('../config');
const userFacade = require('../model/user/facade');

function jwt() {
    const secret = config.secretJwtKey;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/user/authenticate',
            '/user/register',
            { url: '/marriage-status', methods: ['GET']}
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userFacade.findById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};

module.exports = jwt;