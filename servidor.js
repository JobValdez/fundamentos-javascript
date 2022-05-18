const http = require("http");

function sitioWeb(req, res)
{
    res.writeHead(200, {"Content-type": "text/html"} );
    res.end("Mi <strong>segundo</strong> servidor");
}

let servidor = http.createServer(sitioWeb);

servidor.listen(6969,"127.0.0.1");

console.log("Servidor coriendo en el puerto 6969");