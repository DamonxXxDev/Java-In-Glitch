const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html'); 
});
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
const http = require('http');
app.get("/", (request, response) => {
  response.sendStatus(200); 
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://«”„ «·»—Êﬂ”.glitch.me`); //replace jagroshmusicbot with your project name »œ· jagroshmusicbot »Ì «”„ «·»—ÊÃﬂ  Õﬁﬂ
}, 280000); 
var shell = require('shelljs'); 
shell.exec('java -jar Toxic.jar')