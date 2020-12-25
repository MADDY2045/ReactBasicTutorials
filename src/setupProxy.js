const { createProxyMiddleware  } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware("/whatsapp/template",{
            target:"https://2ecc6220-e7a1-4dc4-9928-4a78b990e407:4667110b-67a1-4b98-a3dd-7045ac56c796@api.karix.io",
            changeOrigin:true
        })
    )
}