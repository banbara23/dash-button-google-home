const shell = require('shelljs')
const dash_button = require('node-dash-button');

// const dash = dash_button("b4:7c:9c:4e:2f:fd", null, null, 'all');

// dash.on("detected", function (){
//   console.log("call sh");
//   shell.exec('/home/pi/dev/dash-button-google-home/play.sh')
// });

shell.exec(`aplay --quiet ${process.cwd()}/play.sh`) //テンプレートリテラル
console.log(process.cwd()) //プロジェクトパスを取得できる /Users/ikemura/dev/dash-button-google-home