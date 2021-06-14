package com.program.program.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.program.program.entities.Address;
import com.program.program.repository.AddressRepository;

@Service
public class AddressService {
	@Autowired
	private AddressRepository repository;
	@Transactional
	public List<Address> findAll(){
		List<Address> address = repository.findAll();
		return address;
	}
}
