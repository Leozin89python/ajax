package test.com.example.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import test.com.example.app.entities.Card;

public interface Repository extends JpaRepository<Card, Long>{
	
}
