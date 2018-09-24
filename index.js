const sebas = require('sebas')
const { servestatic } = require('sb-static')
const { format } = require('@jp6rt/utils')

sebas.get('/*')
 .pipe((request, response, next) => {
		
 servestatic(request, response, next, {
  'dir': format('{0}/dist', __dirname),
  'hashedStore': sebas.hashedStore,
  'memchync': false,
  'fallBack':  format('{0}/dist/index.html', __dirname)
 })

 })

;(async () => {
 await sebas.start({ debugMode: !0, port: 8000 })
})()