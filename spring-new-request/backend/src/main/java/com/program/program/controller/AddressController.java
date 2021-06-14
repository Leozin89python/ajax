package com.program.program.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.program.program.entities.Address;
import com.program.program.service.AddressService;

@RestController
@RequestMapping(value = "/address")
public class AddressController {

	@Autowired
	private AddressService service;
		@GetMapping
		public ResponseEntity<List<Address>> findAll() {
			List<Address> address = service.findAll();
			return ResponseEntity.ok().body(address);
		}
}
