//FAZER REQUIRE DO MODELS

const { Op } = require('sequelize')

module.exports = class magicHandsController {
    static showMagic(req, res) {
        res.render('registerstaff')
    }
}

