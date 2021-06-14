package com.app.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.application.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{

}
