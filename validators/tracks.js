const { check } = require('express-validator');
const validateResults = require('../utils/handleValidators')

const validatorCreateItem = [
    check('name')
        .exists()
        .notEmpty(),
    check('album')
        .exists()
        .notEmpty(),
    check('cover')
        .exists()
        .notEmpty(),
    check('artist')
        .exists()
        .notEmpty(),
        check('artist.name')
            .exists()
            .notEmpty(),
        check('artist.nickname')
            .exists()
            .notEmpty(),
        check('artist.nationality') 
            .exists()
            .notEmpty(),

    check('duration')
        .exists()
        .notEmpty(),
        check('duration.start')
            .exists()
            .isNumeric(), 
        check('duration.end')
            .exists()
            .isNumeric(), 

    check('mediaId')
        .exists()
        .notEmpty()
        .isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    } // Como es un middleware, tiene que devolver algo, en este caso el callback

];

module.exports = { validatorCreateItem };
