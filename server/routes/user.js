const { SuccessModel, ErrorModel } = require('../utils/resModel')

const router = require('koa-router')()
const { login } = require('../controller/user')

router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  const data = await login(username, password)
  console.log(data);
  // console.log(data.username);
  if (data) {
    ctx.body = new SuccessModel()
    return
  }

  ctx.body = new ErrorModel("登录失败")
})

module.exports = router
