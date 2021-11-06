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