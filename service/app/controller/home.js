'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    ctx.body = '<h1>jspang blog list</h1>'
  }
}

module.exports = HomeController;

//RESTful：APP及前后端分离
//简单同时有约束性：请求方式：get获取数据，post新建资源，put修改资源，delete删除资源


