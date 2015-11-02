<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calendar extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Calendar";
		$data['page'] = "Calendar";

		$this->load->view('Temp/header', $data);
		$this->load->view('Temp/title');
		$this->load->view('Calendar/calendarNav');
		$this->load->view('Settings/settingsWifi');
		$this->load->view('Temp/footer');
	}

}