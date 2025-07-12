Spring Core – Load Country from XML Configuration
📖 Objective
To understand how to use Spring Core to configure and load Java Beans using an XML configuration file. This example loads country information (like ISO code and name) from a Spring XML file using the ApplicationContext.

🌐 Scenario
An airline booking site supports multiple countries. Country data must be loaded from Spring's configuration XML to populate a country dropdown.

🛠️ Technologies Used
Java 17+

Spring Core

Maven

IntelliJ IDEA / Eclipse

📁 Project Structure
css
Copy code
spring-learn/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cognizant/springlearn/
│   │   │       ├── SpringLearnApplication.java
│   │   │       └── model/
│   │   │           └── Country.java
│   │   └── resources/
│   │       └── country.xml
├── pom.xml
└── README.md
🧾 Steps to Run
1. Clone or Download the Project
2. Add the Spring Configuration XML (country.xml)
xml
<!-- src/main/resources/country.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
                           https://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="country" class="com.cognizant.springlearn.model.Country">
        <property name="code" value="IN"/>
        <property name="name" value="India"/>
    </bean>
</beans>
3. Create the Country Class
package com.cognizant.springlearn.model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    public String getCode() {
        LOGGER.debug("Inside getCode()");
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Inside setCode()");
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("Inside getName()");
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Inside setName()");
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country{code='" + code + "', name='" + name + "'}";
    }
}
4. Modify SpringLearnApplication.java
package com.cognizant.springlearn;

import com.cognizant.springlearn.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        displayCountry();
    }

    public static void displayCountry() {
        LOGGER.debug("START displayCountry()");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        LOGGER.debug("Country : {}", country);
        LOGGER.debug("END displayCountry()");
    }
}
⚙️ Build and Run
Build with Maven:
mvn clean install
Run the application using your IDE or:
mvn exec:java -Dexec.mainClass="com.cognizant.springlearn.SpringLearnApplication"
📋 Output (Expected Logs)

DEBUG com.cognizant.springlearn.SpringLearnApplication - START displayCountry()
DEBUG com.cognizant.springlearn.model.Country - Inside Country Constructor.
DEBUG com.cognizant.springlearn.model.Country - Inside setCode()
DEBUG com.cognizant.springlearn.model.Country - Inside setName()
DEBUG com.cognizant.springlearn.SpringLearnApplication - Country : Country{code='IN', name='India'}
DEBUG com.cognizant.springlearn.SpringLearnApplication - END displayCountry()
📘 Key Concepts Explained
<bean>: Defines a Spring bean.

id: Unique identifier for the bean.

class: Fully qualified class name.

<property>: Injects values into bean properties using setter methods.

ApplicationContext: Central interface to load Spring beans.

ClassPathXmlApplicationContext: Loads context from classpath XML files.

context.getBean(): Instantiates and returns a bean defined in XML.

✅ Conclusion
This hands-on demonstrates how to use Spring's Core Container to manage beans using XML configuration and helps understand Spring’s Inversion of Control (IoC) in a simple Java-based setup.