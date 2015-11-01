<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Settings extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Settings";
		$data['page'] = "Settings";

		$this->load->view('temp/header', $data);
		$this->load->view('temp/title');
		$this->load->view('settings/settingsNav');
		$this->load->view('settings/settingsWifi');
		$this->load->view('temp/footer');
	}

}