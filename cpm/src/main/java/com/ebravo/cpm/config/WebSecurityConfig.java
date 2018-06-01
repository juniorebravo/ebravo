package com.ebravo.cpm.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.ebravo.cpm.security.CPMUserDetailsService;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private CPMUserDetailsService userDetailsService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.
			authorizeRequests()
				.antMatchers("/assets/**").permitAll()
				.antMatchers("/login", "/recuperar-senha").permitAll()
				.antMatchers("/projetos").hasAnyRole("PG_PROJETOS")
				.antMatchers("/relatorio-equipe").hasAnyRole("PG_REL_EQUIPE")
				.antMatchers("/relatorio-custos").hasAnyRole("PG_REL_CUSTOS")
				.anyRequest()
				.authenticated()
			.and()
			.formLogin()
				.loginPage("/login")
				.permitAll()
			.and()
			.logout()
				.logoutSuccessUrl("/login?logout")
				.permitAll()
			.and()
			.rememberMe()
				.userDetailsService(userDetailsService);
	}

}
