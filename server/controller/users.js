const User = require('../models/Users');

class UsersCtl {
  // 查询用户
  async find() {
    const userlists = await User.find();
    console.log(userlists);
    return userlists;
  }

  // 根据id查询用户
  async findById(id) {
    const user = await User.findById(id);
    return user;
  }

  // 新建用户
  async createUser(user) {
    const res = await new User(user).save();
    return res;
  }

  // 更新用户
  async updateUser(id, newUser) {
    const user = await User.findByIdAndUpdate(id, newUser);
    return user;
  }

  // 删除用户
  async deleteUser(id) {
    const res = await User.findByIdAndRemove(id);
    return res;
  }

  // 登录
  async login(username, password) {
    const user = await User.find({
      username,
      password,
    });
    if (user == null) return {};

    return user[0];
  }
}

module.exports = new UsersCtl();
// const login = async (username, password) => {
//   const user = await User.find({
//     username,
//     password
//   })

//   if (user == null) return {}

//   console.log(user);

//   return user[0]
// }
