"use strict";
exports.__esModule = true;
var express_1 = require("express");
var PORT = 3000;
var tryp = 'tr';
var app = express_1["default"]();
app.get('/', function (req, res) {
    res.send('serverRunning');
});
app.listen(PORT, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:" + PORT);
});
