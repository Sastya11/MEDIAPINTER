function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6r7uRCW4IV2":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementByld('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();
}

