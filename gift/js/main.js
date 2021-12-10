var id;
var lrcFile;
var picUrl = new Array();
chuShi();
var cloud = 'http://cloud-music.pl-fe.cn/'
var Console = [
  '============================================',
  'BlurLRC',
  '曲库:网易云',
  '',
  '查看更新日志请输入 funConsole(updateDiary)',
  '',
  'Doge:QQ:2261129603',
  '',
  '============================================'
]
function funConsole(text) {
  for (let i = 0; i < text.length; i++) {
    const oo = text[i];
    console.log(oo);
  }
}
funConsole(Console)
var updateDiary = [
  '2021/12/3 21:58 修复屎山代码：搜索音乐后会等待所有音乐准备就绪后打印到面板，而不是等待500ms'
]

function chuShi() {

  /*
      停止所有音乐并且重置
  */
  audio.pause();
  oLRC = {
    ti: "", //歌曲名
    ar: "", //演唱者
    al: "", //专辑名
    by: "", //歌词制作人
    offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
    ms: [] //歌词数组{t:时间,c:歌词}
  }
  lineNo = 1 //设置行数为0

  /*
      开始部署https://autumnfish.cn/
  */
  if (id === undefined) {
    document.getElementById("lyric").innerHTML = '<li> 啊偶o_o .... 你好像还没输入任何内容 </li><li></li><li></li><li></li>'
  } else {
    fetch(cloud + 'song/url?id=' + id + '&br=320000')
      .then(response => response.json())
      .then(data => {
        audio.src = data.data[0].url
      })
    //
    //获取音乐歌词信息
    //

    getMusicDate();

  }
  setTimeout(() => {
    play();
  }, 500);

}


function kydone(e) {
  var evt = window.event || e;
  if (evt.keyCode == 13) {
    //回车事件
    Search(document.getElementById('musicInput').value);
  }
}

function Search(id) {
  if (id == undefined) {} else {
    fetch(cloud + '/search?keywords=' + id)
      .then(response => response.json())
      .then(data => {
        if (data === undefined) {
          document.getElementById("lyric").innerHTML = '<li> 啊偶o_o .... API坏掉了 0.0 </li>'
        } else {
          switch (data.code) {
            case 200:
              songslab = data.result.songs
              SearchChuLi()
              break;

            default:
              document.getElementById("lyric").innerHTML = '<li> 啊偶o_o .... API坏掉了 0.0 </li>';
          }
        }
      })
  }
}

function SearchChuLi() {
  document.getElementById("backlab").innerHTML = '处理中...'
  var b = ''
  var artists = []
  var i = 0
  for (; i <= songslab.length - 1; i++) {
    var m = ""
    for (var n = 0; n <= songslab[i].artists.length - 1; n++) {
      m += songslab[i].artists[n].name + ' '
    }
    artists.push(m);
  }
  let backlab = []
  for (let i = 0; i <= songslab.length - 1; i++) {
    var picUrl
    fetch(cloud + 'song/detail?ids=' + songslab[i].id)
      .then(response => response.json())
      .then(data => {
        console.log(data.songs[0])
        picUrl = data.songs[0].al.picUrl;
        backlab += '<div style="background-image:url(' + picUrl + ')" onclick="setid(' + songslab[i].id + ',\'' + picUrl + '\',\'' + songslab[i].name + '\',\'' + artists[i] + '\');" class="mulabone" ><div class="mulabonec">' + songslab[i].name + '<a class="mulaboneb">' + artists[i] + '</a></div><div class="bg3" ><div class="mulabonea">' + songslab[i].name + '<a class="mulaboneb">' + artists[i] + '</a></div></div></div>';
        if (i == songslab.length - 1) {
          document.getElementById("backlab").innerHTML = backlab;
        }
      })
    //console.log('音乐准备>'+document.getElementById('musicInput').value+'（'+(i + 1) + '/' + songslab.length + ')')
  }

}
