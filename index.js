const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

const port = process.env.PORT || 9000;

app.get("/", (req, res, next) => res.send("Netlify Hosting Server By https://github.com/hiennguyen92"));

const server = app.listen(port);

const peerServer = ExpressPeerServer(server, {
	path: "/server",
});
console.log("Server Started");
app.use("/peerjs", peerServer);