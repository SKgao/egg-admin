// cookie字符
exports.keys = 'name=value;expires=date'

// 添加view
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
}

// news 配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'http://jsonplaceholder.typicode.com/comments'
}

// add middleware robot
exports.middle = [
  'robot'
]

// robot's configurations
exports.robot = {
  ua: [
    /Baiduspider/i
  ]
}