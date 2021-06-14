package com.app.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.application.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Long>{

}
