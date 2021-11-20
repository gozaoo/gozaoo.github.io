function start() {
	document.getElementById("search").focus();
	quotes = new Array //创建消息数组
	consoleOPES(); //console推广
	bodyTime(); // 系统消息
	reget();// 闲聊模块
}

function consoleOPES(){
	console.log('########################################################################\n欢迎使用haoyo起始页\n\n\n下方内容仅用于调试')
}

function bodyTime() {
	var today = new Date()
	var h = today.getHours()
	var m = today.getMinutes()
	var s = today.getSeconds()
	// add a zero in front of numbers<10
	h = checkTime(h)
	m = checkTime(m)
	s = checkTime(s)
	if (document.getElementById('time').innerHTML != h + ":" + m) {
		document.getElementById('time').innerHTML = h + ":" + m
	}
	if (document.getElementById('time-s').innerHTML != ":" + s) {
		document.getElementById('time-s').innerHTML = ":" + s
	}
	t = setTimeout('bodyTime()', 50)
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}
	return i
}



function kydone(e) {
	var evt = window.event || e;
	if (evt.keyCode == 13) {
		//回车事件
		var inps
		var reg =
			/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
		var inps = document.getElementById('search').value;
		if (!reg.test(inps)) {
			window.open("https://cn.bing.com/search?q=" + inps);
		} else {
			window.open(inps);
		}
	}
}

function kydonemb(e) {
	var evt = window.event || e;
	if (evt.keyCode == 13) {
		//回车事件
		var inps
		var reg =
			/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
		var inps = document.getElementById('searchmb').value;
		if (!reg.test(inps)) {
			window.open("https://quark.sm.cn/s?q=" + inps);
		} else {
			window.open(inps);
		}
	}
}

function asrc(b) {
	var srv = b;
	var inps = document.getElementById('search').value;
	//开始判断
	if (srv == 'bing') { //检测是不是必应
		window.open("https://cn.bing.com/search?q=" + inps);
	} else if (srv == 'quark') { //检测是不是夸克
		window.open( "https://quark.sm.cn/s?q=" + inps);
	} else if (srv == 'taobao') { //检测是不是夸克
		window.open("https://s.taobao.com/search?q=" + inps);
	} else if (srv == 'bilibili') { //检测是不是bilibili
		window.open("https://search.bilibili.com/all?keyword=" + inps);
	}
}
