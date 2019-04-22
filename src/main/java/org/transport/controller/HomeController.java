/**
 *
 */
package org.transport.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author simon.pascal.ngos
 *
 */
@Controller
public class HomeController {

	@GetMapping("/")
	public String homepage() {
		return "redirect:/index.html";
	}

}
