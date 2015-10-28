<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Home";

		$this->load->view('temp/header', $data);
		$this->load->view('temp/footer');
	}
}