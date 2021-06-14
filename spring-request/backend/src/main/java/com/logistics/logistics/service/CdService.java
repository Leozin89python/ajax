package com.logistics.logistics.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.logistics.logistics.entities.Cd;
import com.logistics.logistics.repository.CdRepository;

@Service
public class CdService {
	@Autowired
	private CdRepository repository;
	@Transactional
	public List<Cd> findAll(){
		List<Cd> cd = repository.findAll();
		return cd;
	}
}
