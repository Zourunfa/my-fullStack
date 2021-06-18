const mongoose = require('../conf/db');

// 用schema定义数据规范
const UsersSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  realname: String,
});
// timestamps: true 可以加上时间戳

// Model
// 这里的第一个参数写user ,它会自动解析成users
const User = mongoose.model('user', UsersSchema);

module.exports = User;
