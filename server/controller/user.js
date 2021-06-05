const User = require('../models/User')

const login = async (username, password) => {
  const user = await User.find({
    username,
    password
  })

  if (user == null) return {}

  console.log(user);

  return user[0]
}

module.exports = {
  login
}