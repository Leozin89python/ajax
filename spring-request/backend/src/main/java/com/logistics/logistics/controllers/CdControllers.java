package com.logistics.logistics.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logistics.logistics.entities.Cd;
import com.logistics.logistics.service.CdService;

@RestController
@RequestMapping(value = "/cd")
public class CdControllers {
	
	@Autowired
	private CdService service;
	@GetMapping
	public ResponseEntity<List<Cd>> findAll(){
		List <Cd> cd = service.findAll();
		return ResponseEntity.ok().body(cd);
	}
}
