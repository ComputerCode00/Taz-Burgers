var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 3050;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);    
