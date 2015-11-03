<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class UnitConverter extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Unit Converter";
		$data['page'] = "Unit Converter";

		$this->load->view('Temp/header', $data);
		$this->load->view('Temp/title');
		$this->load->view('UnitConvert/unitConvertNav');
		$this->load->view('UnitConvert/unitConvertMass');
		$this->load->view('Temp/footer');
	}

}