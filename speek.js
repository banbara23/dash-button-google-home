//http://alice345.hatenablog.com/entry/2014/07/16/001218

// すべてjsでできそう
//https://pondad.net/iot/2016/02/13/raspberrypi-voice-text-web-api.html
const fs = require('fs')
const VoiceText = require('voicetext')
const voice = new VoiceText('bx3eyggxff8rlcmh:')

voice
  .speaker(voice.SPEAKER.HIKARI)
  .emotion(voice.EMOTION.HAPPINESS)
  .emotion_level(voice.EMOTION_LEVEL.HIGH)
  .volume(200)
  .speak('ねぇグーグル、動物のこえ', function(e, buf){
    if(e){
      console.error(e);
      return;
    }
    fs.writeFile('./voice.wav', buf, 'binary', function(e){
      if(e){
        console.error(e);
        return;
      }
    });
  });