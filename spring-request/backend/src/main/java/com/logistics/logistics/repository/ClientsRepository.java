package com.logistics.logistics.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.logistics.logistics.entities.Clients;

public interface ClientsRepository extends JpaRepository<Clients, Long>{

}
