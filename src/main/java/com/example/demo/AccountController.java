package com.example.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

// 이메일 인증
@PostMapping("login/mailConfirm")
@ResponseBody
String mailConfirm(@RequestParam("email") String email) throws Exception {

   String code = registerMail.sendSimpleMessage(email);
   System.out.println("인증코드 : " + code);
   return code;
}