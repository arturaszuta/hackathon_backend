const router = require('express').Router();
const finalData = require('./finalData').default;

router.use('/finaldata', finalData);

exports.api = router;
