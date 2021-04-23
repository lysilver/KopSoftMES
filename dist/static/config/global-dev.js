/**
 * 全局配置，webpack不会打包
 * 开发环境
 */
;(function () {
  window.SITE_CONFIG = {}
  window.SITE_CONFIG['baseUrl'] = 'http://localhost:8091'// 后台接口请求地址
  window.SITE_CONFIG['domain'] = '' // 域名
  window.SITE_CONFIG['version'] = '20191204' // 版本号(年月日时分)
})()
