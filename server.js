const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const fs = require("fs");

// middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(PORT, () => {
	console.log(`It's port ${PORT}`);
});
