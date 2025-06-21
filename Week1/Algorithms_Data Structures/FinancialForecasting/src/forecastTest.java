public class forecastTest {
    public static void main(String[] args) {
        double initial = 1000, rate = 0.10;
        int years = 5;
        double futureValue = financialForecast.forecastValue(initial, rate, years);
        System.out.println("Predicted Future Value after " + years + " years: ₹" + futureValue);
    }
}