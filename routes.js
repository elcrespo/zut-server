const Router = require('express').Router
const router = new Router()

const marriageStatus = require('./model/marriage-status/router')
const user = require('./model/user/router')
const ruling = require('./model/ruling/router')
const vote = require('./model/vote/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to zut-server API!' })
})
router.use('/marriage-status', marriageStatus)

router.use('/user', user)
router.use('/ruling', ruling)
router.use('/vote', vote)

module.exports = router
