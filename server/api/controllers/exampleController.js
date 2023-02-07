const { Example } = require('../../models');

module.exports = {

    async getExamples(req, res) {
        try {
            const examples = await Example.find();
            res.json(examples);
        } catch (error) {
            res.status(500).json(error)
        }
    },

    async createExample(req, res) {
        try {
            const example = await Example.create(req.body);
            res.json(example);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}