<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Recipes extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Recipes";
		$data['page'] = "Recipes";

		$this->load->view('Temp/header', $data);
		$this->load->view('Temp/title');
		$this->load->view('Recipes/recipesNav');
		$this->load->view('Settings/settingsWifi');
		$this->load->view('Temp/footer');
	}

}