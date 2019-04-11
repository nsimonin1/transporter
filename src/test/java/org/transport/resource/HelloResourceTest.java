/**
 *
 */
package org.transport.resource;

import static org.junit.Assert.assertThat;

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
public class HelloResourceTest {
	@Rule
	public MockitoRule mockitoRole = MockitoJUnit.rule();
	@InjectMocks
	private HelloResource helloResource;
	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
	}

	/**
	 * Test method for {@link org.transport.resource.HelloResource#hello()}.
	 */
	@Test
	public void testHello() {
		final String result=helloResource.hello();
		assertThat(result, IsNull.notNullValue());
		assertThat(result,IsEqual.equalTo("My First app"));
	}

}
