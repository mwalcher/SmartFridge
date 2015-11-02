<footer>
	<ul class="small-block-grid-9 columns navIcons">
		<li id="lock"><img src="<?php echo base_url().'images/nav_lock.png';?>"></li>
		<li><a href="<?php echo base_url(); ?>"><img src="<?php echo base_url().'images/nav_home.png';?>" alt="Home"></a></li>
		<li><a href="<?php echo base_url().'index.php/FoodManager'; ?>"><img src="<?php echo base_url().'images/nav_food.png';?>" alt="Food Manager"></a></li>
		<li><a href="<?php echo base_url().'index.php/GroceryList'; ?>"><img src="<?php echo base_url().'images/nav_grocery.png';?>" alt="Grocery List"></a></li>
		<li><a href="<?php echo base_url().'index.php/Recipes'; ?>"><img src="<?php echo base_url().'images/nav_recipe.png';?>" alt="Recipes"></a></li>
		<li><a href="<?php echo base_url().'index.php/Notepad'; ?>"><img src="<?php echo base_url().'images/nav_note.png';?>" alt="Notepad"></a></li>
		<li><a href="<?php echo base_url().'index.php/UnitConverter'; ?>"><img src="<?php echo base_url().'images/nav_calc.png';?>" alt="Unit Converter"></a></li>
		<li><a href="<?php echo base_url().'index.php/Calendar'; ?>"><img src="<?php echo base_url().'images/nav_cal.png';?>" alt="Calendar"></a></li>
		<li><a href="<?php echo base_url().'index.php/Settings'; ?>"><img src="<?php echo base_url().'images/nav_settings.png';?>" alt="Settings"></a></li>
	</ul>
</footer>
</div> <!-- End Container -->

<script src="<?php echo base_url().'js/vendor/jquery.js';?>"></script>
<script src="<?php echo base_url().'js/foundation.min.js';?>"></script>
<script>
$(document).foundation();
</script>
<script type="text/javascript">
	baseURL = "<?php echo base_url(); ?>";
</script>
<script type="text/javascript" src="<?php echo base_url().'js/clock.js';?>"></script>
<script type="text/javascript" src="<?php echo base_url().'js/main.js';?>"></script>
<script type="text/javascript" src="<?php echo base_url().'js/retina.min.js';?>">></script>
</body>
</html>