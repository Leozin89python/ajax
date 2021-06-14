package test.com.example.app.resources;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import test.com.example.app.entities.Card;
import test.com.example.app.error.PersonalException;
import test.com.example.app.service.CardService;


@RestController
@RequestMapping
public class CardResources {
	
	@Autowired
	CardService service;
	
	
	@RequestMapping(value = "/card")
	@GetMapping
	public ResponseEntity<List<Card>> find() {
		List<Card> cards = service.find();
		return ResponseEntity.ok().body(cards);
	}
	
}
