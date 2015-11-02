<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class FoodManager extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Food Manager";
		$data['page'] = "Food Manager";

		$this->load->view('Temp/header', $data);
		$this->load->view('Temp/title');
		$this->load->view('FridgeManager/fridgeNav');
		$this->load->view('Settings/settingsWifi');
		$this->load->view('Temp/footer');
	}

}