const Router = require('express').Router
const router = new Router()

const user = require('./model/user/router')
const ruling = require('./model/ruling/router')
const vote = require('./model/vote/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to zut-server API!' })
})

router.use('/user', user)
router.use('/ruling', ruling)
router.use('/vote', vote)

module.exports = router
