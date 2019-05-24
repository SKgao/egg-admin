const Service = require('egg').Service

class SomeService extends Service {
  async list() {
    const rule = this.robot.config.ua
  }
}

module.exports = SomeService