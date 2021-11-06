
console.log("============================================\n欢迎使用Doge的作品\nBlurLRC v:1.1.1.211030_base_b\n\n曲库:网易云\n测试阶段，遇到bug为正常，可以重复点击或刷新重试解决。\n\nQQ:2201129603\nDoge 2021/10/30\n============================================");

var id;
var lrcFile;
var picUrl = new Array();
var lineNo = 0; //当前行
var lineNoTop; //歌词于顶部高度
var audio = document.getElementById("audio"); //播放器
var ul = document.getElementById("lyric"); //歌词容器列表

function chuShi() {
    /*
        停止所有音乐重置
    */
    audio.pause()
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