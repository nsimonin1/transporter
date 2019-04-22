/**
 *
 */
package org.transport.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author simon.pascal.ngos
 *
 */
@RestController
public class HelloResource {

	/**
	 *
	 * @return
	 */
	@GetMapping("/api")
	public String hello() {
		return "My First app";
	}
}
