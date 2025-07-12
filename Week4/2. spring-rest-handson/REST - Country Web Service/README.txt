REST - Country Web Service
This project demonstrates a simple Spring Boot RESTful web service that returns country details (specifically India) using Spring's XML configuration and auto-conversion to JSON.

✅ Objective
Create a REST endpoint that loads the "India" country bean from a Spring XML configuration file and returns it as a JSON response.

🛠️ Endpoint Details
URL: /country

Method: GET

Controller Class: com.cognizant.springlearn.controller.CountryController

Method Annotation: @RequestMapping

Method Name: getCountryIndia()

Sample Response:

{
  "code": "IN",
  "name": "India"
}
📁 Files Involved
country.xml: Spring configuration file with country bean

Country.java: POJO class with code and name fields

CountryController.java: Controller that loads the bean and returns it

✍️ Sample Code
country.xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
           http://www.springframework.org/schema/beans
           https://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="country" class="com.cognizant.springlearn.model.Country">
        <property name="code" value="IN"/>
        <property name="name" value="India"/>
    </bean>
</beans>
Country.java

public class Country {
    private String code;
    private String name;

    // Getters, setters, toString() here
}
CountryController.java
@RestController
public class CountryController {

    @RequestMapping("/country")
    public Country getCountryIndia() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        return country;
    }
}
▶️ How to Run
Ensure country.xml is in src/main/resources.

Add necessary logging if needed.

Run the SpringLearnApplication class.

Open browser or Postman.

Access: http://localhost:8083/country

🧪 Test the Endpoint
In Browser:
Open DevTools → Network tab → Reload /country

Inspect HTTP headers and response body

In Postman:
Create a new GET request to http://localhost:8083/country

Click Headers tab to view response metadata

