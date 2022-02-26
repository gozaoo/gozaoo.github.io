window.onload = function () {
	bodyTime()
	hitokoto()
}

function bodyTime() {
	var today = new Date()
	var h = today.getHours()
	var m = today.getMinutes()
	var s = today.getSeconds()

	h = checkTime(h)
	m = checkTime(m)
	s = checkTime(s)
	if (document.getElementById('time-hm').innerHTML != h + ":" + m) {
		document.getElementById('time-hm').innerHTML = h + ":" + m
	}
	setTimeout(() => {
		bodyTime()
	}, 100);
}

function hitokoto() {
	fetch('https://v1.hitokoto.cn/?c=i&encode=json&charset=utf-8').then(r => r.json()).then(r => {
		document.getElementById('yiYan-text').innerText = r.hitokoto
		document.getElementById('yiYan-fw').innerText = '《' + r.from + '》 -' + r.from_who

		document.getElementById('yiYanBox').addEventListener('click', (th, ev) => {
			hitokotoInfo(r.hitokoto, {
				height: th.clientY,
				width: th.clientX
			})
		})
	})

}

function hitokotoInfo(text, pt) {
	let newIframe = document.createElement('iframe');
	newIframe.className = 'guShiIframe'
	newIframe.src = 'https://quark.sm.cn/api/rest?method=sc.gushiwen_title&format=html&q=' + text;
	newIframe.style = 'top:' + pt.height + 'px;left:' + pt.width + 'px';
	document.body.insertBefore(newIframe, document.getElementById('text-Bar'))
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}
	return i
}

function search(value) {
	let newV
	if (value != undefined) {
		newV = value
	} else{
		newV = document.getElementById('input').value
	}
	let urlReg = /(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]/
	if (urlReg.test(newV)) {
		location.href =newV
	} else {
		location.href = "https://cn.bing.com/search?q="+newV
	}
}
document.addEventListener('keydown', (th) => {
	if (th.key=='Enter'){
		search()
	}
	if (th.path[0] == document.getElementsByTagName('body')[0]) {
		if (th.key != undefined && th.key.length == 1) {}
		document.getElementById('input').focus()

	} else {
		return
	}

})

document.addEventListener('click', (th) => {
	if (document.getElementsByClassName('guShiIframe')[1] || (th.path[0] == document.getElementsByClassName('bg-filter')[0]&& document.getElementsByClassName('guShiIframe')[0])) {
		for (const num in document.getElementsByClassName('guShiIframe')) {
			let elm = document.getElementsByClassName('guShiIframe')[num];
			elm.parentNode.removeChild(elm);
		}
	}
})