lineNo = 0; //当前行
var lineNoTop;
LineNoIf();
TestGunDong();
var offset = -80; //滚动距离（应等于行高）
var audio = document.getElementById("audio"); //播放器
var ul = document.getElementById("lyric"); //歌词容器列表


SetLineHeight()

function LineNoIf() {
  var templineNo
  for (var i = 0; i < oLRC.ms.length; i++) {
    if (oLRC.ms[i].t <= document.getElementById("audio").currentTime + 0.5) {
      templineNo = i + 1;
    }
  }
  if (templineNo !== undefined) {
    lineNo = templineNo
  }
  t = setTimeout('LineNoIf()', 50);
}

function SetLineHeight() {
  let lis = ul.getElementsByTagName("li"); //歌词数组
  if (lineNo > 0 && audioStatus == 'playing') {
      lis[lineNo - 1].className = "lineHigh"; //高亮显示当前行
  }
  var a = 0
  var c
  for (var i = 0; i <= lineNo - 1; i++) {
    var b
    b = lis[i].clientHeight + 30
    a += b
    c = a
  }
  lineNoTop = c
  for (var i = 0; i < oLRC.ms.length; i++) {
    if (i != lineNo - 1 && i != lineNo) {
      lis[i].removeAttribute("class")
    }
  }
  t = setTimeout('SetLineHeight()', 100);
}

function TestGunDong() {
  var hight = document.body.clientHeight;
  var topheight = hight / 2 - lineNoTop;
  document.getElementById("lyric").style.transform = "translateY(" + topheight + "px)"
  t = setTimeout('TestGunDong()', 50);
}
