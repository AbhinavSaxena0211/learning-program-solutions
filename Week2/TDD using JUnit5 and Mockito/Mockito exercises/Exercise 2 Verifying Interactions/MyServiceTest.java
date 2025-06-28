package in.cognizant.verifyinginteractionsex;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;

public class MyServiceTest {
	@Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        service.fetchData();
        verify(mockApi).getData();
        System.out.println("Verified: getData() was called on ExternalApi.");
    }
}
