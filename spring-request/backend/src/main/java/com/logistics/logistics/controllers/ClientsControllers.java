package com.logistics.logistics.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.logistics.logistics.entities.Clients;
import com.logistics.logistics.service.ClientsService;

@RestController
@RequestMapping(value = "/clients")
public class ClientsControllers {
	
	@Autowired
	private ClientsService service;
	@GetMapping
	public ResponseEntity<List<Clients>> findAll(){
		List<Clients> clients = service.findAll();
		return ResponseEntity.ok().body(clients);
	}
}
