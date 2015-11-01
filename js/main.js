(function(){
	var styles = document.querySelector('style');
	var lockButton = document.querySelector('#lock');
	var lockScreen = document.querySelector('#lockScreen');
	var mainContent = document.querySelector('#container');
	var passCode = document.querySelector('#passcode');
	var passSubmit = document.querySelector('#passcode input[type="submit"]');
	var navIcons =  document.querySelectorAll('.navIcons a');
	var fridge = document.querySelector('#fridge');
	var fridgeTemp = document.querySelector('#fridgeDeg');
	var freezer = document.querySelector('#freezer');
	var freezerTemp = document.querySelector('#freezerDeg');
	var setButton = document.querySelector('#setTemp');
	var tUp = document.querySelector('#tempUp');
	var tDown = document.querySelector('#tempDown');
	var waterD = document.querySelector('#dispenserW');
	var crushD = document.querySelector('#dispenserC');
	var iceD = document.querySelector('#dispenserI');
	var brightness = document.querySelector('#brightness');
	var bUp = document.querySelector('#brightUp');
	var bDown = document.querySelector('#brightDown');
	var curTemp =  document.querySelector('#temp');
	var c = true;
	var size = brightness.value;

	styles.innerHTML = "input[type=range]::-webkit-slider-thumb{transform: scale("+ size +","+ size +");}";

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
		styles.innerHTML = "input[type=range]::-webkit-slider-thumb{transform: scale("+ size +","+ size +");}";
		//console.log(size);
	}

	function adjustBrightness(){
		var adjBright;
		if(this.id === "brightUp"){
			adjBright = Number(brightness.value) + 0.1;
			if(adjBright >= 2){
				adjBright = 2;
			}
			brightness.value = adjBright;
			scaleSun();
		}else if(this.id === "brightDown"){
			adjBright = Number(brightness.value) - 0.1;
			if(adjBright <= 1){
				adjBright = 1;
			}
			brightness.value = adjBright;
			scaleSun();
		}
	}

	function changeTemp(){
		if(this.id === "fridge"){
			freezer.style.width = 0;
			freezer.style.display = "none";
			fridge.style.width = "100%";
			fridge.style.border = "none";
		}else if(this.id === "freezer"){
			fridge.style.width = 0;
			fridge.style.display = "none";
			freezer.style.width = "100%";
		}
	}

	function adjustTemp(){
		var adjTemp;

		if(fridge.style.display === "block" && freezer.style.display === "block"){
			alert("Please select either the Fridge or the Freezer before you adjust the temperature.");
		}else{
			if(fridge.style.display === "block"){
				if(this.id === "tempUp"){
					adjTemp = parseInt(fridgeTemp.innerHTML,10);
					adjTemp++;
					fridgeTemp.innerHTML = adjTemp;
				}else if(this.id === "tempDown"){
					adjTemp = parseInt(fridgeTemp.innerHTML,10);
					adjTemp--;
					fridgeTemp.innerHTML = adjTemp;
				}
			}else if(freezer.style.display === "block"){
				if(this.id === "tempUp"){
					adjTemp = parseInt(freezerTemp.innerHTML,10);
					adjTemp++;
					freezerTemp.innerHTML = adjTemp;
				}else if(this.id === "tempDown"){
					adjTemp = parseInt(freezerTemp.innerHTML,10);
					adjTemp--;
					freezerTemp.innerHTML = adjTemp;
				}
			}
		}
	}

	function setTemp(){
		if(freezer.style.display === "none"){
			fridge.style.width = "50%";
			fridge.style.borderRight = "1px solid #fff";
			setTimeout(delayFreezer, 1000);
		}else if(fridge.style.display === "none"){
			freezer.style.width = "50%";
			setTimeout(delayFridge, 1000);
		}
	}

	function delayFreezer(){
		freezer.style.display = "block";
		freezer.style.width = "50%";
	}

	function delayFridge(){
		fridge.style.display = "block";
		fridge.style.width = "50%";
	}

	function activeDispenser(){
		if(!this.classList.contains("active")){
			waterD.classList.remove("active");
			crushD.classList.remove("active");
			iceD.classList.remove("active");
			this.classList.add("active");
		}
	}

	function activeFooter(){
		for(i=0; i<navIcons.length; i++) {
			navIcons[i].classList.remove("active");
			this.classList.add("active");
		}
	}

	[].forEach.call(navIcons, function(e) {
		e.addEventListener("click", activeFooter, false);
	});

	function openLockScreen(){
		lockScreen.style.display = "block";
	}

	function openPasscode(){
		mainContent.setAttribute("style", "-webkit-filter:blur(10px); -moz-filter:blur(10px); filter:blur(10px);");
		passCode.style.display = "block";
	}

	function unlockScreen(){
		mainContent.setAttribute("style", "-webkit-filter:blur(0); -moz-filter:blur(0); filter:blur(0);");
		passCode.style.display = "none";
		lockScreen.style.display = "none";
	}

	currentTemp();
	curTemp.addEventListener("click", switchTemp, false);
	brightness.addEventListener("input", scaleSun, false);
	waterD.addEventListener("click", activeDispenser, false);
	crushD.addEventListener("click", activeDispenser, false);
	iceD.addEventListener("click", activeDispenser, false);
	fridge.addEventListener("click", changeTemp, false);
	freezer.addEventListener("click", changeTemp, false);
	setButton.addEventListener("click", setTemp, false);
	tUp.addEventListener("click", adjustTemp, false);
	tDown.addEventListener("click", adjustTemp, false);
	bUp.addEventListener("click", adjustBrightness, false);
	bDown.addEventListener("click", adjustBrightness, false);
	lockButton.addEventListener("click", openLockScreen, false);
	lockScreen.addEventListener("click", openPasscode, false);
	passSubmit.addEventListener("submit", unlockScreen, false);

})();