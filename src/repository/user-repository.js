const { User } = require("../models/index.js");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong with repository layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong with repository layer");
      throw error;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (error) {
      console.log("something went wrong with repository layer");
      throw error;
    }
  }

  async getByEmail(UserEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: UserEmail,
        },
      });
      return user;
    } catch (error) {
      console.log("something went wrong with repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
