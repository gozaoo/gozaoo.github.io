function setid(ids, pic, mun, muar) {
  id = ids;
  document.getElementsByClassName('bg1')[0].style = 'background-image: url(' + pic + ') ;'
  document.getElementsByClassName('titlebackblur')[0].style = 'background-image: url(' + pic + ') ;'
  document.getElementsByClassName('titleMusicImage')[0].style = 'background-image: url(' + pic + ') ;'
  document.getElementById('titleMusicName').innerHTML = mun;
  document.getElementById('titleMusicAC').innerHTML = muar;
  setTimeout(() => {
    chuShi();

  }, 100);
}

function download() {
  fetch(cloud + 'song/url?id=' + id + '&br=320000')
    .then(response => response.json())
    .then(data => {
      window.open(data.data[0].url);
    })
}
var audioStatus = "paused";

function play() {
  status()
  if (audioStatus == "playing") {
    audio.pause();
  } else if (audio.src != 'http://127.0.0.1:3000/' && audio.src != 'http://127.0.0.1:5500/') {
    console.log(audio.src)
    audio.play();
  }
}

function status() {
  audio.addEventListener("playing", function () {
    audioStatus = "playing";
  });
  audio.addEventListener("pause", function () {
    audioStatus = "paused";
  });
}

slider = document.getElementById("slider");
controller = document.getElementById("controller");
processor = document.getElementById('processor')

function funSlider() {
  var left = (audio.currentTime / audio.duration) * slider.offsetWidth;

  document.getElementById("audioTime").innerHTML = timeFormat(audio.currentTime) + '&nbsp&nbsp&nbsp' + timeFormat(audio.duration);
  processor.style = 'width: ' + left + 'px;';
  controller.style = 'transform: translateX(' + (left - 4) + 'px) ;';
  setTimeout(() => {
    funSlider()
  }, 50);
};

funSlider();



//将单位为秒的的时间转换成mm:ss的形式
function timeFormat(number) {
  var minute = parseInt(number / 60);
  var second = parseInt(number % 60);
  minute = minute >= 10 ? minute : "0" + minute;
  second = second >= 10 ? second : "0" + second;
  return minute + ":" + second;
}
ud_new = false;
function ud(){
  if (ud_new == false) {
    document.getElementById('playerBox').style = 'transform: translate(0,100%) scale(0.50);opacity: 0.2;'    
    ud_new = true;
  } else {
    document.getElementById('playerBox').style = 'transform: translate(0,-25px) scale(1);opacity: 1;'    
    ud_new = false;
  }
}


var outDiv = document.getElementById('backlab');  
outDiv.onwheel = function(event){  
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）  
    event.preventDefault();  
    //设置鼠标滚轮滚动时屏幕滚动条的移动步长  
    var step = 200;  
    if(event.deltaY < 0){  
        //向上滚动鼠标滚轮，屏幕滚动条左移  
        this.scrollLeft -= step;  
    } else {  
        //向下滚动鼠标滚轮，屏幕滚动条右移  
        this.scrollLeft += step;  
    }  
}