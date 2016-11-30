var http = require('http');
var url = require("url");
var userservice = require("../dao/userdao");


var server = http.createServer(function (req, res) {
    //获得请求路径
    var pathname = url.parse(req.url).pathname;

    //关闭nodejs 默认访问 favicon.ico
    if (!pathname.indexOf('/favicon.ico')) {
        return;
    }
    console.log("pathname=" + pathname);
    route(pathname, req, res);
});
server.on('clientError', function (err, socket) {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);

/**
 * 分配给相应的action
 * @param pathname
 * @param req
 * @param res
 */
function route(pathname, req, res) {
    switch (pathname) {
        case "/":
            break;
        case "/register":
            break;
        case "/login":
            break;
        case "/":
            break;
        case "/":
            break;
        case "/":
            break;
        case "/":
            break;
        case "/":
            break;
        case "/":
            break;
        default:
            res.end("hello world");
            break;
    }
}