package com.logistics.logistics.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.logistics.logistics.entities.Clients;
import com.logistics.logistics.repository.ClientsRepository;

@Service
public class ClientsService {

	@Autowired
	private ClientsRepository repository;
	@Transactional
	public List<Clients> findAll(){
		List<Clients> clients = repository.findAll();
		return clients;
	}
}
