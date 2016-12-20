//require in express router
const router = require ("express").Router();

router.use('/comment', require('./comment-router'))
router.use('/post', require('./post-router'))
router.use('/vote', require('./vote-router'))


module.exports = router;