const shell = require('shelljs')
dash_button = require('node-dash-button');
const dash = dash_button("b4:7c:9c:4e:2f:fd", null, null, 'all'); //address from step above
dash.on("detected", function () {

  switch (getRandomIntInclusive(0, 2)) {
    case 0:
      console.log("0");
      shell.exec(`${process.cwd()}/speek_animal.sh`)
      break;
    case 1:
      console.log("1");
      shell.exec(`${process.cwd()}/speek_instrument.sh`)
      break;
    case 2:
      console.log("2");
      shell.exec('/home/pi/sound/play.sh')
      break;
    default:
      console.log("d");
      shell.exec(`${process.cwd()}/speek_animal.sh`)
      break;
  }

});

// 2つの値の間のランダムな整数の取得
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}