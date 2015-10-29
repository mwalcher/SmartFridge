(function(){
	var curTemp =  document.querySelector('#temp');
	var c = true;

	function currentTemp(){
		var newTemp = Math.floor(curTemp.innerHTML);
		curTemp.innerHTML = newTemp + "&deg;C";
	}

	function switchTemp(){
		var cTemp;
		var fTemp;
		
		if(c){
			cTemp = curTemp.innerHTML.substring(0, curTemp.innerHTML.length - 2);
			fTemp = (cTemp * 1.8) + 32;
			curTemp.innerHTML = fTemp + "&deg;F";
			c = false;
		}else{
			fTemp = curTemp.innerHTML.substring(0, curTemp.innerHTML.length - 2);
			cTemp = (fTemp - 32) / 1.8;
			var newCTemp = Math.floor(cTemp);
			curTemp.innerHTML = newCTemp + "&deg;C";
			c = true;
		}
	}

	currentTemp();
	curTemp.addEventListener("click", switchTemp, false);

})();