const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

const port = process.env.PORT || 9000;

app.get("/", (req, res, next) => res.send("Hosting Server By <a href='https://github.com/hiennguyen92'>Hien Nguyen</a>"));

const server = app.listen(port);

const peerServer = ExpressPeerServer(server, {
	path: "/",
	allow_discovery: true,
	key: "client",
});
console.log("Server Started");
app.use("/server", peerServer);