window.onload=getweather()
function getweather() {
	window.navigator.geolocation.getCurrentPosition(function (p) {
		var jd = p.coords.longitude
		var wd = p.coords.latitude
		var weatherApiLink = 'https://devapi.qweather.com/v7/weather/now?location=' + jd + "," + wd + '&key=6481d49774104e088a6a5a73399162d5'
		fetch(weatherApiLink)
		.then(response => response.json())
		.then(data => {
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
	start();
	t = setTimeout('getweather()', 120000)
}
