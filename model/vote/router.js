const controller = require('./controller')
const Router = require('express').Router
const router = new Router()

router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args))

router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args))

router.route('/user/:userId')
  .get((...args) => controller.findyByUserId(...args))

router.route('/ruling/:rulingId')
  .get((...args) => controller.findByRulingId(...args))

router.route('/user/:userId/ruling/:rulingId')
.get((...args) => controller.findByUserAndRuling(...args))

module.exports = router
