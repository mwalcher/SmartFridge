<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Notepad extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Notepad";
		$data['page'] = "Notepad";

		$this->load->view('Temp/header', $data);
		$this->load->view('Temp/title');
		$this->load->view('NotePad/notepadNav');
		$this->load->view('NotePad/notepadAdd');
		$this->load->view('Temp/footer');
	}

}