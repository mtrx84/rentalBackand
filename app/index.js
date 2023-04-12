const express = require('express');
const cors = require('cors')
const compression = require('compression');
const cookieParser = require('cookie-parser'); 
const helmet = require('helmet');
const app = express();
app.set('Access-Control-Allow-Origin', 'origin-list')

// init database
require('./db/mongoose')

app.use(helmet({
  contentSecurityPolicy:{
    directives:{
      defaultSrc:["'self'", "wrobud.com.pl", 'https://www.google-analytics.com/analytics.js', "https://www.google-analytics.com/j/collect"],

      frameSrc:["'self'","https://www.youtube.com/", "google-analytics.com", "youtube-nocookie.com","youtube-nocookie.com", "www.google.com", "youtube.com" ,'docs.google.com' ],
      childSrc:["youtube-nocookie.com", "google-analytics.com"],
      mediaSrc:[ "youtube-nocookie.com", "google-analytics.com"],

      objectSrc:["'self'"],
      fontSrc:["'self'", "fonts.gstatic.com", "cdnjs.cloudflare.com"],
      scriptSrcElem:["'self'","'unsafe-inline'","https://www.googletagmanager.com/debug/", "https://www.googletagmanager.com/gtm.js", "https://googletagmanager.com" ,"googletagmanager.com",'https://www.google-analytics.com/analytics.js', "google-analytics.com", "cdnjs.cloudflare.com", "https://www.cdn.jsdelivr.net", "cdn.jsdelivr.net"],
      scriptSrc:["'self'","'unsafe-inline'","https://www.googletagmanager.com", "googletagmanager.com" ,"google-analytics.com", "cdnjs.cloudflare.com", "https://www.cdn.jsdelivr.net", "https://cdn.jsdelivr.net"],
      
      styleSrc:["'self'","'unsafe-inline'", "cdn.jsdelivr.net", "cdnjs.cloudflare.com", "fonts.googleapis.com", ],
      imgSrc:["'self'","googletagmanager.com", 'https://www.google-analytics.com/analytics.js',"www.google-analytics.com/collect", "cdnjs.cloudflare.com"],
      workerSrc:["'self'"]
      
    }
  }
}));

app.use(compression({level:9, filter: (req, res) => { 
  var x = compression.filter(req, res);
  // console.log('to-be-compressed', x, ' ', req.originalUrl);
  return x; } }));

//body parser dla danych application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cookieParser())

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'wrobud.com.pl');
  res.header('x-powered-by', '');
  next();
});

// CORS OPTIONS
const corsOpt  = { 
  // origin : 'https://wrobud.com.pl', 
  optionsSuccessStatus : 200  
}

app.use('/api',cors(corsOpt), require('./routes/api/api-routes'))

module.exports = {app}