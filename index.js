const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

app.get("/", (req,res) => {
	res.sendFile(__dirname+"/index.html")
})

io.on('connection', socket => {
	console.log("ada yang konek gan");
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	  });
	socket.on("disconnect", ()=>{
		console.log("dadaaaah");
	})
})


server.listen(3000, ()=>{
	console.log("oke jalan di 3000");
})