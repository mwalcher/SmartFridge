<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Settings extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Settings";

		$this->load->view('temp/header', $data);
		$this->load->view('Settings/settingsNav');
		$this->load->view('temp/footer');
	}

}