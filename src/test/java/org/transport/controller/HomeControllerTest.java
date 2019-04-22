/**
 *
 */
package org.transport.controller;

import static org.hamcrest.MatcherAssert.assertThat;

import org.hamcrest.core.IsEqual;
import org.hamcrest.core.IsNull;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.junit.MockitoJUnit;
import org.mockito.junit.MockitoRule;

/**
 * @author simon.pascal.ngos
 *
 */
public class HomeControllerTest {
	@Rule
	public MockitoRule mockitoRole = MockitoJUnit.rule();
	@InjectMocks
	private HomeController controller;
	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
	}

	/**
	 * Test method for {@link org.transport.controller.HomeController#homepage()}.
	 */
	@Test
	public void testHomepage() {
		final String result=controller.homepage();
		assertThat(result, IsNull.notNullValue());
		assertThat(result, IsEqual.equalTo("redirect:/index.html"));
	}

}
