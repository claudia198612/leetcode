const jwt = require('jsonwebtoken');

// 生成JWT Token
const payload = { username: 'alice', userId: '123456' };
const secretKey = 'my-secret-key';
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
console.log('JWT Token:', token);

// 解析JWT Token
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('Invalid Token:', err);
    return;
  }
  console.log('Decoded Token:', decoded);
});
