package com.app.application.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.app.application.entities.Address;

public class AddressDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	private Long id;
	private String cidade;
	private String estado;
	private String uf;
	private String pais;
	private List<ClientDTO> clients = new ArrayList<>();
	public AddressDTO() {
		
	}
	public AddressDTO(Long id, String cidade, String estado, String uf, String pais) {
		this.id = id;
		this.cidade = cidade;
		this.estado = estado;
		this.uf = uf;
		this.pais = pais;
	}
	public AddressDTO(Address entity) {
		id = entity.getId();
		cidade = entity.getCidade();
		estado = entity.getEstado();
		uf = entity.getUf();
		pais = entity.getPais();
		clients = entity.getClients()
						.stream()
						.map(e -> new ClientDTO(e))
						.collect(Collectors.toList());
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public String getPais() {
		return pais;
	}
	public void setPais(String pais) {
		this.pais = pais;
	}
	public List<ClientDTO> getClients() {
		return clients;
	}
}
