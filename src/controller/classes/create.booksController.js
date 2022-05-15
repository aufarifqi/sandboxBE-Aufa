const { books } = require('../../models');
const { body } = require("express-validator")
const service = async(req, res) => {
    const moment = require('moment');
    try {
        const payload = req.body;
        const requestDB = await books.create(req.body);

        return res.json({
            message: 'User created successfully',
            data: requestDB,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.toString(),

        });
    }
    const validation = [body("name").notEmpty().withMessage("Name is required").custom(value => {

            const requestDB = await books.findOne({ where: { name: value } });
            if (requestDB) {
                throw new Error("Class already exists");

            }
        }),
        body("description").notEmpty().withMessage("Description is required").custom((value) => {
            // check future date
            value = moment(value);
            if (value.isAfter(moment())) {
                return true;
            } else {
                throw new Error("Date from must be future date");
            }
        }),


        body("dateFrom").notEmpty().withMessage("Date from is required"),
        body("dateTo").notEmpty().withMessage("Date to is required"),
    ];

};

module.exports = { service, validation };