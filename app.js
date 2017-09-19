var express = require('express'),
	bodyParser = require('body-parser'),
	http =  require ('http'),
	path = require('path'),
	session = require('express-session');
	hash = require('./pass').hash;
	mongodb = require('mongodb'),
	// router = require('./router.js'),
	app = express(),
	server = http.createServer(app);
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(session({secret: "its a secret!"}));
    app.use(express.static(__dirname));
    app.listen(3000);
    var ContactController = require('./controller/contactController');

app.get('/contacts', function(req,res){
	ContactController.getcontacts(function(){
		console.log("hhhh");
		res.write("hi");
		res.end();
	})
})
app.get('/index',function(req,res){
    console.log("Node get called");
    var data = "Hi I am from Node Js";
    // res =  data;
    res.redirect('/home.html');
})
// app.use('/', router);
app.get('/new',function(req,res){
    console.log("Node get called");
    var data = "Hi I am from Node Js";
    // res =  data;
    res.send(data);
})
app.get('/getuser',function(req,res){
    var data = "Welcome";
    // res =  data;
    res.redirect();
})
getuser
// login / signup
function authenticate(name, pass, fn) {
    if (!module.parent) console.log('authenticating %s:%s', name, pass);

    User.findOne({
        username: name
    },

    function (err, user) {
        if (user) {
            if (err) return fn(new Error('cannot find user'));
            hash(pass, user.salt, function (err, hash) {
                if (err) return fn(err);
                if (hash == user.hash) return fn(null, user);
                fn(new Error('invalid password'));
            });
        } else {
            return fn(new Error('cannot find user'));
        }
    });

}

function requiredAuthentication(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}

function userExist(req, res, next) {
    User.count({
        username: req.body.username
    }, function (err, count) {
        if (count === 0) {
            next();
        } else {
            req.session.error = "User Exist"
            res.redirect("/signup");
        }
    });
}


