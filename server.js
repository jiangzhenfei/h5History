const express = require('express')
const path = require('path')
const app = express()
var proxyMiddleWare = require("http-proxy-middleware");

var proxyPath = "http://172.24.4.150:30010";//目标后端服务地址(公司同事电脑地址)
var proxyOption ={target:proxyPath,changeOrigoin:true};

app.use("/kdcos",proxyMiddleWare(proxyOption))

// handle fallback for HTML5 history API
//把所有的匹配结果转给index。html
app.use(require('connect-history-api-fallback')())

app.use(express.static(path.join(__dirname, 'public')))



app.listen(8000, () => {
  console.log(`App listening at port 8080`)
})