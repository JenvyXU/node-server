var http=require('http')
var fs=require('fs')
var url=require('url')

var server=http.createServer(function(req,res){
  if(req.url==='/sample/test.html'){
    console.log(req.url)
    var html=fs.readFileSync(__dirname+req.url,'binary')
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.writeHead(200,'OK')
    res.write(html,'binary')
    res.end()
  }
  else{
  res.setHeader('Content-Type','text/html;charset=utf-8')
    res.writeHead(404,'Not Found')
    res.write('找不到相应的文件,请访问路径/sample/test.html')
    res.end()
}
})

server.listen(8080)
console.log('localhost:8080')

