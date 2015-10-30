<section class="row" id="mainMiddle">
<div class="small-4 columns" id="tempSetting">
	<img id="tempUp" class="upArrow" src="<?php echo base_url().'images/upArrow.png';?>">
	<div class="row">
		<div id="fridge" class="small-6 columns" style="display:block;">
			<h3>Fridge</h3>
			<p class="temp"><span id="fridgeDeg">5</span>&deg;C</p>
		</div>
		<div id="freezer" class="small-6 columns" style="display:block;">
			<h3>Freezer</h3>
			<p class="temp"><span id="freezerDeg">-18</span>&deg;C</p>
		</div>
		<div class="small-12 columns">
			<button id="setTemp">Set Temperature</button>
		</div>
	</div>
	<img id="tempDown" class="downArrow" src="<?php echo base_url().'images/downArrow.png';?>">
</div>