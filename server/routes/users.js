const { SuccessModel, ErrorModel } = require('../utils/resModel');

const router = require('koa-router')();
const {
  login,
  find,
  findById,
  createUser,
  deleteUser,
  updateUser,
} = require('../controller/users');

router.prefix('/api/users');

router.get('/list', async (ctx, next) => {
  const data = await find();
  // console.log(data);

  if (data) {
    ctx.body = data;
    return;
  }

  ctx.body = new ErrorModel('查询失败');
});
router.get('/:id', async (ctx, next) => {
  const user = await findById(ctx.params.id);
  console.log(ctx.params);
  console.log(user);
  if (!user) {
    ctx.throw(404, '用户不存在');
  }
  ctx.body = user;
});

// 新建用户

router.post('/regist', async (ctx, next) => {
  ctx.verifyParams({
    username: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: 'string',
    realname: 'string',
  });
  console.log(ctx.request.body);
  const newUser = ctx.request.body;
  const user = await createUser(newUser);
  ctx.body = user;
});

// 更新用户
router.post('/updateUser/:id', async (ctx, next) => {
  ctx.verifyParams({
    username: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: 'string',
    realname: 'string',
  });
  const id = ctx.params.id;
  const user = ctx.request.body;
  console.log(user);
  const data = await updateUser(id, user);

  if (!data) {
    ctx.throw(404, '用户不存在');
  }

  ctx.body = data;
});

// 删除用户
router.post('/deleteUser/:id', async (ctx, next) => {
  const id = ctx.params.id;
  console.log(id);
  const data = await deleteUser(id);
  if (!data) {
    ctx.throw(404, '用户不存在');
  }

  ctx.body = data;
});

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const data = await login(username, password);
  // console.log(data);
  // console.log(data.username);
  if (data) {
    ctx.body = new SuccessModel();
    return;
  }

  ctx.body = new ErrorModel('登录失败');
});

module.exports = router;
