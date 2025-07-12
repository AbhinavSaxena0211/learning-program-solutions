Spring Boot Web Project (Maven)
🧾 Project Title:
SpringLearn – A Basic Spring Boot Web Application

📖 Objective:
To create a basic Spring Boot Web project using Maven and understand the structure and setup of a Spring Boot application.

🧪 Steps to Create the Project:
Go to Spring Initializr
Visit: https://start.spring.io

Set Project Information

Group: com.cognizant

Artifact: spring-learn

Select Dependencies

Spring Boot DevTools

Spring Web

Download and Extract the ZIP
Unzip the file and place it in your workspace folder.

Build the Project (Use command line)

mvn clean package \
-Dhttp.proxyHost=proxy.cognizant.com \
-Dhttp.proxyPort=6050 \
-Dhttps.proxyHost=proxy.cognizant.com \
-Dhttps.proxyPort=6050 \
-Dhttp.proxyUser=123456
Import into Eclipse IDE
File → Import → Maven → Existing Maven Projects
Browse and select the extracted folder → Finish

Add Logs to Main Method
Open SpringLearnApplication.java and include log statements to confirm that the main method is running.

Run the Application
Right-click on SpringLearnApplication.java → Run As → Java Application

🧩 Project Structure Explanation:
src/main/java
Contains all Java source files including controller, service, and model classes.

src/main/resources
Contains configuration files like application.properties and country.xml.

src/test/java (Optional)
Used for writing test cases. Can be skipped if not testing.

SpringLearnApplication.java
This is the main entry point of the application.
It contains the main() method which launches the Spring Boot application.

@SpringBootApplication Annotation
This is a convenience annotation that combines:

@Configuration

@EnableAutoConfiguration

@ComponentScan
It tells Spring Boot to auto-configure the application, scan components, and start the context.

🧾 pom.xml – Maven Configuration File:
It defines all the dependencies and plugins needed for the project.

Dependencies include:

spring-boot-starter-web

spring-boot-devtools

🔍 Dependency Hierarchy:
You can view the complete dependency tree in Eclipse:

Open the pom.xml

Click on the "Dependency Hierarchy" tab

You can explore how libraries depend on each other

✅ Output:
After running the project, the application starts on default port 8080. You can add controllers to serve REST endpoints and test them in the browser or Postman.



Project Structure

spring-learn/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cognizant/springlearn/
│   │   │       └── SpringLearnApplication.java
│   │   │       └── controller/
│   │   │       └── model/
│   │   │       └── service/
│   │   └── resources/
│   │       └── application.properties
│   │       └── country.xml
│   └── test/
│       └── java/ (Optional)
├── pom.xml
└── README.md

How to Run - 
 
Option 1: From IDE
Open SpringLearnApplication.java

Right-click → Run As → Java Application

Option 2: From Command Line
mvn spring-boot:run
Then go to: http://localhost:8080/

