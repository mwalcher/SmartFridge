<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title;?></title>
    <link rel="stylesheet" href="<?php echo base_url().'css/foundation.css'?>">
	<link rel="stylesheet" href="<?php echo base_url().'css/main.css';?>">
    <script src="<?php echo base_url().'js/vendor/modernizr.js';?>"></script>
  </head>
  <body>
  	<h1 class="hidden">Smart Fridge</h1>

  	<section class="row">
  		<h2 class="small-4 columns">Date</h2>
  		<h2 id="clock" class="small-4 text-center columns"></h2>
  		<h2 class="small-4 text-right  columns">Icons</h2>
  	</section>