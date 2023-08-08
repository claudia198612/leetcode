// ???有误

const cookieSession = require('cookie-session');
const express = require('express');
const app = express();

app.get('/set-cookie', (req, res) => {
    // 一旦使用 res.cookie 设置了 cookie，服务器会在响应头中添加 Set-Cookie 字段并将 cookie 传递给客户端。
    // 客户端会在浏览器中保存这个 cookie。
    res.cookie('username', 'John Doe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set');
  });

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }));

  app.get('/login', (req, res) => {
    // 登录逻辑
    // 设置 session
    req.session.username = 'John Doe';
    res.send('Logged in successfully');
  });

  app.get('/profile', (req, res) => {
    // 获取 session
    const username = req.session.username;
    if (username) {
      res.send(`Hello, ${username}!`);
    } else {
      res.send('Please login first');
    }
  });

app.get('/logout', (req, res) => {
  // 销毁 session
  req.session = null;
  res.send('Logged out successfully');
});
