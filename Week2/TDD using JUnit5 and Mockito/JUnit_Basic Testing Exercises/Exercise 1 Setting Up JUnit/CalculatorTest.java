package in.cognizant.junitex.calculator;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CalculatorTest {
	@Test
	public void testAdd() {
		Calculator cal = new Calculator();
		int result = cal.add(4, 5);
		System.out.println("Result: "+result);
        assertEquals(9, result);
	}
}
