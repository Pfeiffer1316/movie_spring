package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

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

		public String requestParam(
				@RequestParam(required = false, value = "id") String id,
				@RequestParam(required = false, value = "pw") String pw,
				@RequestParam(required = false, value = "nickname") String nickname,
				@RequestParam(required = false, value = "email") String email,
				@RequestParam(required = false, value = "recommender") String recommender, Model model) {

			model.addAttribute("id", id);
			model.addAttribute("pw", pw);
			model.addAttribute("nickname", nickname);
			model.addAttribute("email", email);
			model.addAttribute("recommender", recommender);

			return "redirect:/signUpTest.html?id=" + id + "&pw=" + pw + "&nickname=" + nickname + "&email=" + email
					+ "&recommender=" + recommender;
		}

		@GetMapping(value = "/signUpTest.html")

		public String signUpTest() {

			return "signUpTest";
		}
	}

}