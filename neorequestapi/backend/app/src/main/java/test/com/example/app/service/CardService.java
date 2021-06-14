package test.com.example.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.com.example.app.entities.Card;
import test.com.example.app.repository.Repository;

@Service
public class CardService{
	
	@Autowired
	Repository repo;
	
	public List<Card> find() {
		return repo.findAll();
	}
	
}
