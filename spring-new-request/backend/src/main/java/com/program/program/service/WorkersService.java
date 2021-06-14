package com.program.program.service;

import java.util.List;

import javax.persistence.Entity;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.data.convert.WritingConverter;
import org.springframework.stereotype.Service;

import com.program.program.entities.Workers;
import com.program.program.repository.WorkersRepository;

@Service
public class WorkersService {
	
	@Autowired
	private WorkersRepository repository;
	@Transactional
	public List<Workers> findAll(){
		List<Workers> workers = repository.findAll();
		return workers;
	}
}
