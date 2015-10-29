<section>
	<div class="small-4 columns">
		<h2 id="mainClock"></h2>
		<p><?php echo date('l F d Y');?></p>
	</div>
	<div class="small-4 columns">
		<img id="logo" src="<?php echo base_url().'images/LG.png';?>">
	</div>
	<div class="small-4 columns text-right">
		<img src="<?php echo base_url().'images/'.$icon.'.png';?>">
		<h2 id="temp"><?php echo $temp;?></h2>
	</div>
	
</section>