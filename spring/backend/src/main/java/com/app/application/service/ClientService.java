package com.app.application.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.application.dto.ClientDTO;
import com.app.application.entities.Client;
import com.app.application.repository.ClientRepository;

@Service
public class ClientService {
	@Autowired
	private ClientRepository repository;
	@Transactional
	public List <ClientDTO> findAll(){
		List<Client> clients = repository.findAll();
		return clients.stream().map(e -> new ClientDTO(e)).collect(Collectors.toList());
	}
}
