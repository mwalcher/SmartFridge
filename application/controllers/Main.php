<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {

	public function index(){
		$data['title'] = "Smart Fridge - Home";
		$this->load->helper('date');


		$url = "http://api.openweathermap.org/data/2.5/weather?q=London,CA&appid=bd82977b86bf27fb59a04b61b657fb6f";
		$json=file_get_contents($url);
		$tempData=json_decode($json, true);
		$temp = $tempData['main']['temp'];
		$c = $temp-273.15;
		$data['temp'] = $c;

		$this->load->view('temp/header', $data);
		$this->load->view('home/mainTop');
		$this->load->view('temp/footer');
	}

}