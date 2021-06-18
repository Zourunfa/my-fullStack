const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017';
const DBNAME = 'test';

// 解决启动警告
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(`${URL}/${DBNAME}`, {
  // 配置
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 云数据链接地址
/**
 * mongodb+srv://af:aa123321@afmongod.vfald.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 */

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

// 连接成功
// db.once('open', () => {
//   console.log('mongose connect success..');
// })

module.exports = mongoose;
