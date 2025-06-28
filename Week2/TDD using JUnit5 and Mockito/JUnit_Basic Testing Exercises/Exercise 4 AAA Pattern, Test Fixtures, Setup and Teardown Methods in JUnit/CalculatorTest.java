package in.cognizant.junitaaapatternex;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {
	private Calculator calculator;
	@Before
	public void setup() {
		calculator = new Calculator();
		System.out.println("Setup Complete");
	}
	@After
    public void tearDown() {
        System.out.println("Teardown after test");
    }

    @Test
    public void testAdd() {
        int result = calculator.add(5, 3);
        System.out.println("Result: "+result);
        assertEquals(8, result);
    }
    @Test
    public void testSubtract() {
        int result = calculator.subtract(10, 4);
        System.out.println("Result: "+result);
        assertEquals(6, result);
    }
}
