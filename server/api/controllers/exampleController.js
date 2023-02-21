const { Example } = require("../../models");

module.exports = {
    async getExamples(req, res) {
        try {
            const examples = await Example.find();
            res.json(examples);
        } catch (error) {
            res.status(500).json(error);
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

    async getSingleExample(req, res) {
        try {
            const example = await Example.findById(req.params.id);
            res.json(example);
        } catch (error) {
            res.status(404).json(error);
        }
    },

    async updateExample(req, res) {
        try {
            const example = await Example.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.json(example);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async deleteExample(req, res) {
        try {
            await Example.deleteOne({ _id: req.params.id });
            res.json("Deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

/*
    login: async (parent, { email, password }, context) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
*/