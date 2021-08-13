const express = require("express");
const path = require("path");
// const sqlite3 = require("sqlite3");

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.urlencoded({extended:false}));

app.post("/api/create_new_user", (req, res) => {
	console.log(typeof req.body)
	res.send("cool")
})

app.get("/api/numofusers", (req, res) => {
	res.send("20 mil")
})

app.get("/*", (req, res) => { // We give any unknown url to react-router. Note that react-router can handle the 404.
	res.sendFile(path.join(__dirname+'../client/build/index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`))


