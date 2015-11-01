<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Settings extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Settings";
		$data['page'] = "Settings";

		$this->load->view('Temp/header', $data);
		$this->load->view('Temp/title');
		$this->load->view('Settings/settingsNav');
		$this->load->view('Settings/settingsWifi');
		$this->load->view('Temp/footer');
	}

}