<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title;?></title>
    <link href='https://fonts.googleapis.com/css?family=Lato:400,900,100' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="<?php echo base_url().'css/foundation.css'?>">
	<link rel="stylesheet" href="<?php echo base_url().'css/main.css';?>">
    <script src="<?php echo base_url().'js/vendor/modernizr.js';?>"></script>
   <style type="text/css">
  </style>
  </head>
  <body>
  	<h1 class="hidden">Smart Fridge</h1>

  	<header class="row" id="mainHead">
  		<h2 class="small-4 columns"><?php echo date('D M d');?></h2>
  		<h2 id="clock" class="small-4 text-center columns"></h2>
  		<div class="small-4 columns">
  			<ul class="small-block-grid-4 columns">
  				<li><img class="headerIcon" src="<?php echo base_url().'images/alert.png';?>"></li>
  				<li><img class="headerIcon" src="<?php echo base_url().'images/sync.png';?>"></li>
  				<li><img class="headerIcon" src="<?php echo base_url().'images/wifi.png';?>"></li>
          <li><img class="headerIcon" src="<?php echo base_url().'images/lock.png';?>"></li>	
  			</ul>	
  		</div>
  	</header>