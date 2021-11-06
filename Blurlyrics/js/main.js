var id
var lrcFile
var picUrl = new Array()
chuShi()

console.log("============================================\n欢迎使用Doge的作品\nBlurLRC v:1.1.1.211030_base_b\n\n曲库:网易云\n测试阶段，遇到bug为正常，可以重复点击或刷新重试解决。\n\nQQ:2201129603\nDoge 2021/10/30\n============================================")


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
        fetch('https://api.imjad.cn/cloudmusic/?type=song&id=' + id + '&br=320000')
            .then(response => response.json())
            .then(data => {
                audio.src = data.data[0].url
            })
        //
        //获取音乐歌词信息
        //

        getMusicDate();
        setPlayerGUI();
    }

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
        fetch('https://autumnfish.cn/search?keywords=' + id)
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
    document.getElementById("backlab").innerHTML = ''
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
    for (let i = 0; i <= songslab.length - 1; i++) {
        var picUrl
        fetch('https://api.imjad.cn/cloudmusic/?type=detail&id=' + songslab[i].id)
            .then(response => response.json())
            .then(data => {
                picUrl = data.songs[0].al.picUrl
                document.getElementById("backlab").innerHTML += '<div onclick="setid(' + songslab[i].id + ',\'' + picUrl + '\');" class="mulabone"><div class="mulabonek" style="background-image:url(' + picUrl + ')"></div>' + '<div class="mulabonea">' + songslab[i].name + '</div><div  class="mulaboneb">' + artists[i] + '</div></div>';

            })

    }
}
function setid(ids, pic) {
    id = ids
    document.getElementsByClassName('bg1')[0].style = 'background-image: url(' + pic + ') ;'
    setTimeout(() => {
        chuShi();
    }, 100);
}






