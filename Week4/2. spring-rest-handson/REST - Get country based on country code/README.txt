REST - Get Country Based on Country Code
This Spring Boot project provides a REST API that returns country details based on a given ISO country code. The code lookup is case insensitive, and country data is sourced from a Spring XML configuration.

✅ Objective
Create a RESTful service that:

Accepts a country code as a path variable

Loads a list of countries from country.xml

Searches and returns the matching country (case-insensitive)

📌 Endpoint Details
URL: /countries/{code}

Method: GET

Path Variable: code (case-insensitive country code like IN, us, etc.)

Controller: com.cognizant.springlearn.controller.CountryController

Service: com.cognizant.springlearn.service.CountryService

Method: getCountry(String code)

🔄 Sample Request & Response
Request:

GET http://localhost:8083/countries/in
Response:

{
  "code": "IN",
  "name": "India"
}
🧩 How It Works
The controller receives the request and extracts the country code from the URL.

It invokes the CountryService.getCountry(code) method.

The service:

Loads the list of countries from country.xml

Iterates over the list or uses a lambda filter

Performs a case-insensitive match

Returns the matching Country object

Spring automatically converts the Country object to JSON.

🛠️ File Structure

spring-learn/
├── src/
│   ├── main/
│   │   ├── java/com/cognizant/springlearn/
│   │   │   ├── controller/CountryController.java
│   │   │   ├── service/CountryService.java
│   │   │   └── model/Country.java
│   │   └── resources/
│   │       └── country.xml
│   └── test/
│       └── (optional unit tests)
└── pom.xml
📄 Sample Code
CountryController.java

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
}
CountryService.java

@Service
public class CountryService {
    public Country getCountry(String code) {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries = (List<Country>) context.getBean("countryList");

        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Country not found"));
    }
}
country.xml

<bean id="countryList" class="java.util.ArrayList">
    <constructor-arg>
        <list>
            <bean class="com.cognizant.springlearn.model.Country">
                <property name="code" value="IN"/>
                <property name="name" value="India"/>
            </bean>
            <!-- Add more countries -->
        </list>
    </constructor-arg>
</bean>
▶️ How to Run
Run the Spring Boot application (SpringLearnApplication.java).

Open browser/Postman.

Try different URLs like:

http://localhost:8083/countries/IN

http://localhost:8083/countries/us

📊 Additional Notes
✅ @PathVariable is used to capture URL input.

✅ Country is matched using equalsIgnoreCase().

✅ Spring automatically returns a JSON response.

✅ You can test this using Chrome Developer Tools (Network tab) or Postman (Headers tab).