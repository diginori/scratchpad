var express = require('express'); 
var app = module.exports = express.createServer();

process.env.PORT = 8888;

// 실제 heroku에서는 PORT를 사용. 현재 Cloud9ide에선 C9_PORT사용
var port = process.env.C9_PORT;
if (!port){
    port = process.env.PORT;
}

//configure
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.listen(port);

app.get("/", function(req, res){
    res.sendfile(__dirname + "/index.html");
});

console.log("PORT:"+port);
