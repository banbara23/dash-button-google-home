const shell = require('shelljs')
dash_button = require('node-dash-button');
var dash = dash_button("b4:7c:9c:4e:2f:fd", null, null, 'all'); //address from step above
dash.on("detected", function (){
  console.log("call sh");
  shell.exec('/home/pi/sound/play.sh')
});
