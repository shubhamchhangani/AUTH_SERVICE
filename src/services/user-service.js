const UserRepository = require("../repository/user-repository.js");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong with service layer");
      throw error;
    }
  }
}

module.exports = UserService;
