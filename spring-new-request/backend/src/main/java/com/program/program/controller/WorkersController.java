package com.program.program.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.program.program.Enum.Sector;
import com.program.program.entities.Workers;
import com.program.program.service.WorkersService;

@RestController
@RequestMapping(value = "/workers")
public class WorkersController {
	
	@Autowired
	private WorkersService service;
	@GetMapping
	public ResponseEntity<List<Workers>> findAll(){
		List<Workers> workers = service.findAll();
		return ResponseEntity.ok().body(workers);
	}
}
