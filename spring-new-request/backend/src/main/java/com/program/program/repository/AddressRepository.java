package com.program.program.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.program.program.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Long>{

}
