export default {
  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    res.end('OK');
  },
  'GET /api/currentUser': {
    name: 'momo.zxy',
    userid: '00000001',
    notifyCount: 12,
  },
};
