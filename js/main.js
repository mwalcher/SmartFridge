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
			fTemp = Math.floor((cTemp * 1.8) + 32);
			curTemp.innerHTML = fTemp + "&deg;F";
			c = false;
		}else{
			fTemp = curTemp.innerHTML.substring(0, curTemp.innerHTML.length - 2);
			cTemp = Math.floor((fTemp - 32) / 1.8);
			curTemp.innerHTML = cTemp + "&deg;C";
			c = true;
		}
	}

	currentTemp();
	curTemp.addEventListener("click", switchTemp, false);

})();