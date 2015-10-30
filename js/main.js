(function(){
	var styles = document.querySelector('style');
	var waterD = document.querySelector('#dispenserW');
	var crushD = document.querySelector('#dispenserC');
	var iceD = document.querySelector('#dispenserI');
	var brightness = document.querySelector('#brightness');
	var curTemp =  document.querySelector('#temp');
	var c = true;
	var size = brightness.value;

	styles.innerHTML = "input[type=range]::-moz-range-thumb{transform: scale("+ size +","+ size +");}";

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
			cTemp = Math.floor((fTemp - 32) / 1.8);
			curTemp.innerHTML = cTemp + "&deg;C";
			c = true;
		}
	}

	function scaleSun(){
		size = brightness.value;
		styles.innerHTML = "input[type=range]::-moz-range-thumb{transform: scale("+ size +","+ size +");}";
		//console.log(size);
	}

	function activeDispenser(){
		if(!this.classList.contains("active")){
			waterD.classList.remove("active");
			crushD.classList.remove("active");
			iceD.classList.remove("active");
			this.classList.add("active");
			console.log(this.src);
		}
	}

	currentTemp();
	curTemp.addEventListener("click", switchTemp, false);
	brightness.addEventListener("input", scaleSun, false);
	waterD.addEventListener("click", activeDispenser, false);
	crushD.addEventListener("click", activeDispenser, false);
	iceD.addEventListener("click", activeDispenser, false);

})();