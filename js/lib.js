
document.write('<div style="display:hidden;" id="cssbox"></div>')

window.onload = function () {
    document.getElementById("loadspinner").style.height = "0px";
    document.getElementById("loadspinner").style.width = "0px";
    document.getElementById('libJS_guLiGet').innerText =libJS_guLiGet();
    libJS_cssChange('#libJS_guLiGet',"font-family: 'SIMSUN',SIMSUN,SIMFANG,'Segoe UI'; font-weight: 900;");
    getweather()
}
function libJS_guLiGet() {
    var answer = ["失去金钱的人损失甚少，失去健康的人损失极多，失去勇气的人损失一切。", "这世上的一切都借希望而完成，农夫不会剥下一粒玉米，如果他不曾希望它长成种粒；单身汉不会娶妻，如果他不曾希望有孩子；商人也不会去工作，如果他不曾希望因此而有收益。", "相信就是强大，怀疑只会抑制能力，而信仰就是力量。", "那些尝试去做某事却失败的人，比那些什么也不尝试做却成功的人不知要好上多少。", "恐惧自己受苦的人，已经因为自己的恐惧在受苦。", "在真实的生命里，每桩伟业都由信心开始，并由信心跨出第一步。", "要冒一险！整个生命就是一场冒险，走得最远的人常是愿意去做、愿意去冒险的人。", "“稳妥”之船从未能从岸边走远。", "目标的坚定是性格中最必要的力量源泉之一，也是成功的利器之一。没有它，天才也会在矛盾无定的迷径中徒劳无功。", "在世界的历史中，每一伟大而高贵的时刻都是某种热忱的胜利。", "没有热忱，世间便无进步。", "没有什么事情有象热忱这般具有传染性，它能感动顽石，它是真诚的精髓。", "一个人几乎可以在任何他怀有无限热忱的事情上成功。", "强烈的信仰会赢取坚强的人，然后又使他们更坚强。", "失败是什么？没有什么，只是更走近成功一步；成功是什么？就是走过了所有通向失败的路，只剩下一条路，那就是成功的路。", "如果不想做点事情，就不要想到达这个世界上的任何地方。", "没有哪种教育能及得上逆境。", "障碍与失败，是通往成功最稳靠的踏脚石，肯研究、利用它们，便能从失败中培养出成功。", "让我们将事前的忧虑，换为事前的思考和计划吧！", "人生舞台的大幕随时都可能拉开，关键是你愿意表演，还是选择躲避。", "能把在面前行走的机会抓住的人，十有八九都会成功。", "金钱损失了还能挽回，一旦失去信誉就很难挽回。", "在你不害怕的时间去斗牛，这不算什么；在你害怕时不去斗牛，也没有什么了不起；只有在你害怕时还去斗牛才是真正了不起。", "再长的路，一步步也能走完，再短的路，不迈开双脚也无法到达。", "有志者自有千计万计，无志者只感千难万难。", "不大可能的事也许今天实现，根本不可能的事也许明天会实现。", "我成功因为我志在成功！", "再冷的石头，坐上三年也会暖。", "任何业绩的质变都来自于量变的积累。", "平凡的脚步也可以走完伟大的行程。", "嘲讽是一种力量，消极的力量。赞扬也是一种力量，但却是积极的力量。", "诚心诚意，“诚”字的另一半就是成功。", "领导的速度决定团队的效率。", "成功呈概率分布，关键是你能不能坚持到成功开始呈现的那一刻。", "成功与不成功之间有时距离很短——只要后者再向前几步。", "空想会想出很多绝妙的主意，但却办不成任何事情。", "自己打败自己是最可悲的失败，自己战胜自己是最可贵的胜利。", "一个人除非自己有信心，否则无法带给别人信心。", "为别人鼓掌的人也是在给自己的生命加油。", "用行动祈祷比用言语更能够使上帝了解。", "成功的人是跟别人学习经验，失败的人只跟自己学习经验。", "很多事先天注定，那是“命”；但你可以决定怎么面对，那是“运”！", "不要问别人为你做了什么，而要问你为别人做了什么。", "成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。", "你一天的爱心可能带来别人一生的感谢。", "山不辞土，故能成其高；海不辞水，故能成其深！", "道路坎坷事不期，疾风劲草练男儿。", "奋斗没有终点，任何时候都是一个起点。"]
    return answer[Math.floor(Math.random() * answer.length)];
}

function libJS_cssChange(Element,css) {
    var box =document.getElementById('cssbox')
    box.innerHTML += '<style>'+Element+'{'+css+'}</style>'
}

function getweather() {
	window.navigator.geolocation.getCurrentPosition(function (p) {
		var jd = p.coords.longitude
		var wd = p.coords.latitude
		var weatherApiLink = 'https://devapi.qweather.com/v7/weather/now?location=' + jd + "," + wd + '&key=6481d49774104e088a6a5a73399162d5'
		fetch(weatherApiLink)
		.then(response => response.json())
		.then(data => {
			console.log('\n########################################################################\n' + '天气 APIget记录 \n########################################################################')
			document.getElementById("wtgetwendu").innerHTML = data.now.temp + '°'
			var iconurl = "https://gozaoo.github.io/image/weather/256/" + data.now.icon + ".png"
			console.log('温度：' + data.now.temp + '°' + '\n天气类型:' + data.now.text + '\n体感温度：' + data.now.feelsLike)
			console.log('APIURL结果测试:' + weatherApiLink)
			console.log('图片URL结果测试:' + iconurl)
			document.getElementById("weathericon").src = iconurl
			document.getElementById("wtgetwtype").innerHTML = data.now.text
			if (data.code == "200") {
				document.getElementsByClassName('weatherblock')[0].style.display = 'block'
				console.log('成功链接到 和风天气API ，正常展示class: weatherblock' + '\n########################################################################\n.')
			}
			
		})
		.catch(console.error)
	
	})
}
