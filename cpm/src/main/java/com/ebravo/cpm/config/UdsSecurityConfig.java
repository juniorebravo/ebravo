package com.ebravo.cpm.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ebravo.cpm.security.CPMUserDetailsService;

@Configuration
public class UdsSecurityConfig {
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder builder, 
			PasswordEncoder passwordEncoder, 
			CPMUserDetailsService userDetailsService) throws Exception {
		builder
			.userDetailsService(userDetailsService)
			.passwordEncoder(passwordEncoder);
	}
}
