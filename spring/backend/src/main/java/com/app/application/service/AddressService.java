package com.app.application.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.application.dto.AddressDTO;
import com.app.application.entities.Address;
import com.app.application.repository.AddressRepository;
import com.app.application.repository.ClientRepository;

@Service
public class AddressService {
	@Autowired
	private AddressRepository repository;
	@Transactional
	public List<AddressDTO> findAll(){
		List<Address> address = repository.findAll();
		return address.stream().map(e -> new AddressDTO(e)).collect(Collectors.toList());	
	}
}
