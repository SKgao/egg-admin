const Service = require('egg').Service

class NewsServie extends Service {
  async list(page = 1) {
    const { pageSize, serverUrl } = this.config.news

    const idList = await this.ctx.curl(`${serverUrl}`, {
      data: {
        orderBy: '"$key"',
        startAt: `"${ pageSize * (page - 1) }"`,
        endAt: `"${ pageSize * page - 1 }"`,
      },
      dataType: 'json'
    })

    // const newsList = await Promise.all([
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`
    //     return this.ctx.curl(url, { dataType: 'json' })
    //   })
    // ])

    const newsList = idList.data

    return newsList
  }
}

module.exports = NewsServie