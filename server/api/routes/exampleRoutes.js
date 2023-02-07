const router = require('express').Router();
const {
    getExamples,
    createExample
} = require('../controllers/exampleController')

router.route('/').get(getExamples).post(createExample);

// router
//   .route('/:exampleId')
//   .get(getSingleExample)
//   .put(updateExample)
//   .delete(deleteExample);

module.exports = router;