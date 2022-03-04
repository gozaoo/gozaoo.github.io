var Geo = {}
var geoID, nowTimeWeatherCache, threeDayWeatherCache

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

function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	}
	return i
}

function hitokoto() {
	fetch('https://v1.hitokoto.cn/?c=i&encode=json&charset=utf-8').then(r => r.json()).then(r => {
		document.getElementById('yiYan-text').innerText = r.hitokoto
		document.getElementById('yiYan-fw').innerText = '《' + r.from + '》 -' + r.from_who

		document.getElementById('yiYanBox').addEventListener('click', (th, ev) => {
			hitokotoInfo(r.from, {
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



function search(value) {
	let newV
	if (value != undefined) {
		newV = value
	} else {
		newV = document.getElementById('input').value
	}
	let urlReg = /(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]/
	if (urlReg.test(newV)) {
		location.href = newV
	} else {
		location.href = "https://cn.bing.com/search?q=" + newV
	}
}
document.addEventListener('keydown', (th) => {
	if (th.key == 'Enter') {
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
	if (document.getElementsByClassName('guShiIframe')[1] || (th.path[0] == document.getElementsByClassName('bg-filter')[0] && document.getElementsByClassName('guShiIframe')[0])) {
		for (const num in document.getElementsByClassName('guShiIframe')) {
			let elm = document.getElementsByClassName('guShiIframe')[num];
			elm.parentNode.removeChild(elm);
		}
	}
	if (document.getElementById('weatherBoxBiggerInfo').style.display == 'block' && (th.path[0] == document.getElementsByClassName('bg-filter')[0])) {
		document.getElementById('weatherBoxBiggerInfo').style.display = 'none'
	}
})
weatherBox.addEventListener('click', (th) => {
	if (document.getElementById('weatherBoxBiggerInfo').style.display == 'none') {
		document.getElementById('weatherBoxBiggerInfo').style.display = 'block'
	} else if (document.getElementById('weatherBoxBiggerInfo').style.display == 'block') {
		document.getElementById('weatherBoxBiggerInfo').style.display = 'none'
	}
})

function navGeo() {
	if (navigator.geolocation) {
		/**尝试使用浏览器获取定位 */
		window.navigator.geolocation.getCurrentPosition(function (p) {
			Geo = {
				jd: p.coords.longitude,
				wd: p.coords.latitude
			}
			geoID = JSON.parse(window.localStorage.getItem('geoID'))
			let cacheGeo = JSON.parse(window.localStorage.getItem('geoWZ'))
			if (cacheGeo.jd != Geo.jd) {
				geoEvent()
			}
			qweatherWeather()
			window.localStorage.setItem('geoWZ', JSON.stringify(Geo))
		})
	}
}
navGeo()

function geoEvent() {
	if (Geo == {}) {
		fetch('https://geoapi.qweather.com/v2/city/lookup?location=北京&key=6481d49774104e088a6a5a73399162d5')
			.then(r => r.json())
			.then(r => {
				geoID = r.location[0]
				window.localStorage.setItem('geoID', JSON.stringify(geoID))
			})
	} else {
		fetch('https://geoapi.qweather.com/v2/city/lookup?location=' + Geo.jd + ',' + Geo.wd + '&key=6481d49774104e088a6a5a73399162d5')
			.then(r => r.json())
			.then(r => {
				console.log(r);
				geoID = r.location[0]
				window.localStorage.setItem('geoID', JSON.stringify(geoID))
			})
	}
}

function resetGeoID(text) {
	fetch('https://geoapi.qweather.com/v2/city/lookup?location=' + text + '&key=6481d49774104e088a6a5a73399162d5')
		.then(r => r.json())
		.then(r => {
			if (r.location.length != 1) {
				alert('请描述的再详细一点或准确一点')
			} else {
				console.log(r);
				geoID = r.location[0]
				window.localStorage.setItem('geoID', JSON.stringify(geoID))
			}
		})
}

function qweatherWeather() {
	fetch('https://devapi.qweather.com/v7/weather/now?location=' + geoID.id + '&key=6481d49774104e088a6a5a73399162d5')
		.then(r => r.json())
		.then(r => {
			nowTimeWeatherCache = r.now
			document.getElementById('wbbiIcon').src = 'https://gozaoo.github.io/image/weather/256/' + nowTimeWeatherCache.icon + '.png'
			document.getElementById('wbbiType').innerText = nowTimeWeatherCache.text
			document.getElementById('wbbiSD').innerText = nowTimeWeatherCache.humidity + '%'
			document.getElementById('wbbiTemp').innerText = nowTimeWeatherCache.temp + '°'
			document.getElementById('weatherIcon').src = 'https://gozaoo.github.io/image/weather/256/' + nowTimeWeatherCache.icon + '.png'
			document.getElementById('weatherDu').innerText = nowTimeWeatherCache.temp + '°'
		})
	fetch('https://devapi.qweather.com/v7/weather/3d?location=' + geoID.id + '&key=6481d49774104e088a6a5a73399162d5')
		.then(r => r.json())
		.then(r => {
			threeDayWeatherCache = r.daily
			console.log();
		})


}