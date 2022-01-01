
var typea
function reget() {
	fetch('https://v1.hitokoto.cn/?c=i')
	.then(response => response.json())
	.then(data => {
	answer = data.hitokoto
	typea = data.type
	reloadtext(answer,typea)
	})
	.catch(console.error)
}

function reloadtext(answer2,typea) {
		
	var radomnum = ["1","2","3","4","5","6","7","8"]
	var rnn = radomnum[Math.floor(Math.random() * radomnum.length)];
	var awa
	var answer3 = [{"neir":"学学做菜？", "url": "https://www.xiachufang.com/search/?keyword="},{"neir":"你今天看新闻了吗？", "url": "https://news.cctv.com/"},{"neir":"今天天气怎么样?", "url": "https://www.qweather.com/"},{"neir":"这种天气怎么样?", "url": "https://www.qweather.com/"},{"neir":"把我们推荐给你的好友嘛", "url": "https://cll.rthe.xyz/srp"}];
	//广告
	var answer4 = ["当信息图标为纸飞机时，点击文字可快速跳转","点击信息图标可以刷新信息","鼠标箭头放在时间上，有惊喜", "回车后默认搜索引擎是必应哦", "输入内容后，可以在下方的搜索引擎框选择引擎", "生病了可以尝试第二个夸克搜索", "点击淘宝搜索引擎快速搜索","你发现了吗？你一打开这个网站就会自动选中输入框哦","希望此网站对你有帮助"];
	//用法
	switch (rnn) {
		case "3":
			var awa = answer3[Math.floor(Math.random() * answer3.length)];
			break;
		case "4":
			var awa = answer4[Math.floor(Math.random() * answer4.length)];
			document.getElementById("adnra").onclick = function(){window.open(awa.url)};
			break;
		default:
			var awa = "『"+answer2+"』";
			if (typea == 'i'){document.getElementById("adnra").onclick = function(){window.open('https://quark.sm.cn/api/rest?method=sc.gushiwen_title&format=html&q=' + answer2 + '&entry=sc_title')};} else {document.getElementById("adnra").onclick = function(){window.open('https://quark.sm.cn/s?q=' + answer2)};}
		
	}
	if (rnn == 3) {
		document.getElementById("adnra").innerHTML = awa.neir
		document.getElementById("linkid").src = "https://pic.liesio.com/2021/08/15/6507f4b68a2bf.png"
	} else if (rnn == 4) {
		document.getElementById("adnra").innerHTML = awa
		document.getElementById("linkid").src = "https://pic.liesio.com/2021/08/15/5abb83617571f.png"
	} else{
		document.getElementById("adnra").innerHTML = awa
		document.getElementById("linkid").src = "https://pic.liesio.com/2021/08/15/23cf540f70d22.png"
	}
	}

	function adcl(){
		if (rnn == 3) {
			window.open(awa.url)
		};
		if (rnn == 2) {
			window.open("https://quark.sm.cn/s?uc_param_str=dnntnwvepffrgibijbprsvpidicheiutds&from=kkframenew&q=" + awa)
		}  
	};