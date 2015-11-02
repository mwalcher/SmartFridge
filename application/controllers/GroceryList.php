<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class GroceryList extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Grocery List";
		$data['page'] = "Grocery List";

		$this->load->view('Temp/header', $data);
		$this->load->view('Temp/title');
		$this->load->view('Groceries/groceriesNav');
		$this->load->view('Settings/settingsWifi');
		$this->load->view('Temp/footer');
	}

}