package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Controller
	public class Sample {
		@GetMapping(value = { "/", "/index.html" })

		public String index() {
			return "index";
		}

		@GetMapping(value = "/login.html")

		public String login() {
			return "login";
		}

		@GetMapping(value = "/signUp.html")

		public String signUp() {
			return "signUp";
		}
	}

}