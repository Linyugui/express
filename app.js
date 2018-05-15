var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var abcdRouter = require('./routes/abcd');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express)
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*
app.use(function (req,res,next) {	
	res.send("hello world");

});
app.use(function(req,res,next)
{
	res.send("Welcome");
});
*/


/*use路径
app.use('/abcd',abcdRouter);


app.use('/abc\*d',function (req,res,next) {
  console.log('/abcd');
  next();
})
app.use('/abc\?d',function (req,res,next) {
  console.log('aaa');
  next();
})
app.use('/abc\+d',function (req,res,next) {
  console.log('bbbb');
  next();
})

app.use('/a(bc)\?d',function (req,res,next) {
  console.log('cccc');
  next();
})
app.use(/\/abc|\/xyz/,function (req,res,next) {
  console.log('dddd');
  next();
})
app.use(["/abc","/xyz"],function (req,res,next) {
  console.log('eeee');
  next();
})

*/

/*
var router = express.Router();
router.get('/',function (req,res,next) {
  console.log("router");
  next();
})
//app.use(router);

var router1 = express.Router();
router1.get('/',function (req,res,next) {
  console.log("router1");
  next();
})
//app.use(router1);

//app.use('/',[router,router1]);

app.use(router,router1);




app.use(express.static(__dirname+'/public'));

*/
/*
app.get('/user/:id',function (req,res,next) {
  res.send('user:'+req.params.id);
});
*/
/*
app.get("/viewdirectory",function (req,res,next) {
  console.log(req.app.get('view'));
  next();
})
app.get("/viewdirectory",require('./mymiddleware.js'));
*/
/*baseUrl
var greet = express.Router();
greet.get('/jp',function (req,res,next) {
  console.log(req.baseUrl);
  console.log(app.mountpath);
  res.send('Konichiwa!');
});
app.use('/greet',greet);
//app.use(['/gre\+t','/hel\*o'],greet);

*/

/*
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post('/profile',upload.array(),function (req,res,next) {
  console.log(req.body);
  res.json(req.body);
});



var cookieParser = require('cookie-parser');
var util = require('util');

app.use(cookieParser());

app.get('/',function(req,res)
{
  console.log("Cookies:"+util.inspect(req.cookies));
});
*/


/*
app.use('/',function(req,res,next)
{
  console.log(req.hostname);
});
*/


/*
app.use('/admin/:name',function (req,res,next) {
    console.log(req.originalUrl);
    console.log(req.params.name);
});




app.use('/admin/*',function (req,res,next) {
    console.log(req.originalUrl);
    console.log(req.params[0]);
    console.log(req.baseUrl);
    console.log(req.path);
});
*/



/*
app.use('/admin',function (req,res,next) {
  console.log(req.originalUrl);
  console.log(req.baseUrl);
  console.log(req.path);
});
console.log(app.path());


app.use('/',function (req,res,next) {
  console.log(req.ptotocol);
})
*/

/*
app.use('/admin',function (req,res,next) {
    console.log(req.query.name);

});

//http://127.0.0.1:3000/user/linyugui?name=linyugui
app.get('/user/:id?',function userIdHandler(req,res,next) {
  console.log(req.route);
  res.send('GET');
})

*/

/*
app.use('/',function (req,res,next) {
  if(req.stale)
  {
    console.log('yes');
  }
  else
    console.log('no');
});

app.use('/',function (req,res,next) {
  if(req.fresh)
  {
    console.log('yes');
  }
  else
    console.log('no');
});


app.use('/',function(req,res,next)
{
  console.log(req.hostname);
  console.log(req.subdomains);
});


app.get('/',function (req,res,next) {
  req.get('Content-type');
  console.log(req.accepts('png'));

})
*/

/*
app.get('/user/:id',function (req,res) {
  console.log(res.headersSent);
  res.send('user'+req.params.id);
   console.log(res.headersSent);
})

*/

/*
app.use("/",function (req,res,next) {
  //res.locals.user = req.user;
  //res.locals.pass = !req.user.anonymous;
  res.send("OK");
  next();
});
*/





/*
app.use("/",function (req,res,next) {
  res.append('Lind', ['<http://localhost>', '<http://localhost:3000>']);
  res.append('Set-Cookie', 'foo=bar;Path=/;HttpOnly');
  res.append('Warning', '199 Miscellaneous warning');
  res.send('OK');
})


app.use("/",function (req,res,next) {
  //res.attachment();
  res.attachment('public/images/1.png');
  res.send('OK');
})


app.use('/',function (req,res,next) {
  //res.cookie('name','tobi',{'domin':'.example.com', 'path':'/admin', 'secure':true});
 // res.cookie('remenberme','1',{'expires':new Date(Date.now()+90000),'http-only':true});

 // res.cookie('remenberme','1',{'maxAge':90000,"httpOnly":true});
 // res.cookie('cart',{'items':[1,2,3]});
  //res.cookie('cart',{'items':[1,2,3]},{'maxAge':90000});
 // res.cookie('name','tobi',{'signed':true});

  res.cookie('name','tobi',{'path':'/admin'});
  res.clearCookie('name',{'path':'/admin'});
  res.send('OK');
})
*/



/*
app.get('/',function (req,res,next) {
  res.status(404).end();
  res.send("hello");
})
*/
/*
app.get('/',function (req,res,next) {
  
  res.format({
    'text/plain':function() {
        res.send('aaaaa');
    },
    'text/html':function() {
        res.send('<p>bbbbb</p>');
    },
    'application/json':function() {
        res.send({message:'aaaa'});
    },
    'default':function() {
        res.status(406).send('Not Acceptable');
    }
  });

  res.format({
    text:function() {
        res.send('hey');
    },
    html:function() {
        res.send('<p>hey</p>');
    },
    json:function() {
        res.send({message:'hey'});
    }
  });

console.log(res.get('Content-type'));
  res.send();
})
*/
/*
app.use('/user/name/new',function (req,res,next) {
  //res.json(null);
  //res.json({user:'tobi'});
  //res.status(500).json({error:"message"});
  //res.location('/foo/bar');
  //res.location('http://example.com');
  //res.location('back');
  //res.links({
  //  next:'http://127.0.0.1/user/123',
  //  last:'http://127.0.0.1/user/321'
  // });
  //res.redirect(301, 'http://example.com');
  //res.redirect('/foo/bar');
  res.redirect('post/new');
  res.send("ok");
})
*/
/*
app.use('/user',function (req,res,next) {
    res.render('index',function (err,html) {
    res.send(html);
  });
  
});


app.use('/',function (req,res,next) {
  console.log('OK');
  //res.send(new Buffer('whoop'));
  //res.send({some:'json'});
  //res.send('<p>html</p>');
  //
  //res.status(404).send('Sorry');
  //res.status(500).send({error:'something blew up'});
})
*/
/*
app.use('/file/:name',function (req,res,next) {
  var option = {
    root:__dirname+'/public/images',
    dotfile:'deny',
    headers:{
      'x-timestamp':Date.now(),
      'x-sent':true
    }
  };
  var filename = req.params.name;
  res.sendFile(filename,option,function (err) {
    if(err)
    {
      console.log(err);
      res.status(err.status).end();

    }
    else{
      console.log('sent',filename);
    }
  })
})

app.use('/user/:uid/photos/:file',function (req,res,next) {
  var uid = req.params.uid;
  var file = req.params.file;
  req.user.mayViewFilesFrom(uid,function (yes) {
    if(yes)
    {
      res.sendFile('/upload/'+uid+'/'+file);
    }
    else
    {
      res.status(403).send('Sorry!you can see that');
    }
  })
})


app.use('/',function (req,res,next) {
  //res.set('Content-type','text/html');
  res.set({
    'Content-Type':'text/plain',
    'Content-Length':'123',
    'ETag':'123456'
  });
  res.end();
})
*/
/*
app.use('/',function (req,res,next) {
  //res.status(403).end();
  // res.status(400).send('bad request');
  //res.status(200).sendFile(__dirname+'/public/images/1.png');
  


  //res.type('.html');
  //res.type('html');
  res.type('json');
  res.end();
})

*/
/*
var router = express.Router();

router.use(function (req,res,next) {
  console.log("hello");
  next();
});

router.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function(req, res) {
    var from = req.params[0];
    var to = req.params[1];
    res.send('commit range ' + from + '..' + to);
});
app.use('/',router);
*/

/*
var router = express.Router();
router.param('user',function (req,res,next,id) {
  console.log('user:'+id);
  next();
});

router.get('/:user',function (req,res,next) {
  console.log('event');
  next();
});
app.use('/',router);

var router = express.Router();
router.param('user',function (req,res,next,id) {
  console.log('called only once');
  console.log('user:'+id);
  next();
});

router.get('/:user',function (req,res,next) {
  console.log('first');
  next();
});
router.get('/:user',function (req,res,next) {
  console.log('second');
});
app.use('/',router);

var router = express.Router();
router.param(function (param,validator) {
  return function (req,res,next,val) {
    if(validator(val))
      next();
    else
      res.sendStatus(403);
  }
});

router.param('id',function (candidate) {
  return !isNaN(parseFloat(candidate))&&isFinite(candidate);
});
app.use('/',router);
*/

/*
var router = express.Router();
router.param('user_id',function (req,res,next,id) {
  req.user = {
    id : id,
    name : "linyugui"
  };
  next();
});
router.route('/user/:user_id')
  .all(function (req,res,next) {
    next();
  })
  .get(function (req,res,next) {
    res.json(req.user);
  })
  .put(function (req,res,next) {
    req.user.name = req.params.name;
    res.json(req.user);
  })
  .post(function (req,res,next) {
    next(new Error('not implemented'));
  })
  .delete(function (req,res,next) {
    next(new Error('not implemented'));
  })
app.use('/',router);
*/


/*
var router = express.Router();
router.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
})

router.use('/bar', function(req, res, next) {
    console.log('bar');
    next();
})

router.use(function(req, res, next) {
    res.send('hello world');
})
app.use('/foo', router);

*/

var logger = require('morgan');

var router = express.Router();
router.use(express.static(__dirname+'/public'));

router.use(logger());
router.use(function (req,res) {
  res.send('Hello');
});
app.use('/',router);




//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next();
});





module.exports = app;
