const { User } = require("../../models");

module.exports = {
    async login(req, res) {
        try {
           const user = await User.findOne({ email: req.body.email });

           
        } catch (error) {
            res.json(500).json(error);
        }
    },
};
