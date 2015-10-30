<section class="row">
	<div class="small-4 columns">
		<div id="dateTime">
			<h2 id="mainClock"></h2>
			<p><?php echo date('l F d Y');?></p>
		</div>
	</div>
	<div class="small-4 columns">
		<img id="logo" src="<?php echo base_url().'images/LG.png';?>">
	</div>
	<div class="small-4 columns text-right">
		<div id="weather">
			<img src="<?php echo base_url().'images/'.$icon.'.png';?>">
			<h2 id="temp"><?php echo $temp;?></h2>
			<h2><?php echo $tempTitle;?></h2>
		</div>
	</div>
	
</section>