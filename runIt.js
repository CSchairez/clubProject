
/*
const nunjucks = require('nunjucks');
const fs = require('fs');  // The file system module
// Tells nunjucks where to look for templates and set any options
nunjucks.configure('views', { autoescape: true });

let index_contents = fs.readFileSync('index.html', 'utf8');
let login_contents = fs.readFileSync('login.html', 'utf8');
let signUp_contents = fs.readFileSync('signUp.html', 'utf8');
let about_contents = fs.readFileSync('aboutMe.html', 'utf8');
let activities_contents = fs.readFileSync('clubActivities.html', 'utf8');


let outString = nunjucks.render('base.njk', {mainContent: index_contents});
let out_login = nunjucks.render('login.njk', {mainContent: login_contents});
let out_about = nunjucks.render('about.njk', {mainContent: signUp_contents});
let out_signUp = nunjucks.render('signUp.njk', {mainContent: about_contents});
let out_activities = nunjucks.render('activities.njk', {mainContent: activities_contents});


fs.writeFileSync('./output/index.html', outString);
fs.writeFileSync('./output/login.html', out_login);
fs.writeFileSync('./output/signUp.html', out_about);
fs.writeFileSync('./output/aboutMe.html', out_signUp);
fs.writeFileSync('./output/clubActivities.html', out_activities);

console.log("Generated Website!");


let plugIn = require('./infoPlugin.js');

var Metalsmith  = require('metalsmith');
Metalsmith(__dirname)         // __dirname defined by node.js:
  .source('./src')            // source directory
  .destination('./build')     // destination directory
  .use(plugIn())
  .build(function(err) {      // build process
    if (err) {
      throw err;       // error handling is required
    } else {
      console.log(`Finished Processing: ${Object.keys(files)}`);
  }});

  */
 // Using Markdown Plugin //

 var Metalsmith  = require('metalsmith');
 const layouts = require('metalsmith-layouts');

Metalsmith(__dirname)         // __dirname defined by node.js:
  .source('./src')            // source directory
  .destination('./build')     // destination directory
   .use(layouts({
  default: "base.njk",
  directory: "./layouts",
  pattern: ["*.html", "!*.txt", "!*.css"]
}))
  .build(function(err, files) {      // build process
    if (err) {
      throw err;       // error handling is required
    } else {
      console.log(`Finished Processing: ${Object.keys(files)}`);
  }});
