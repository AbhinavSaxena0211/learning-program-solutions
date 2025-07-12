 Hello World RESTful Web Service
This is a basic Spring Boot RESTful web service that returns a simple greeting message. It's a part of the spring-learn project.

✅ Objective
Create a REST service using Spring Web Framework that returns the string "Hello World!!" when accessed via a browser or Postman.

🛠️ Endpoint Details
Method: GET

URL: /hello

Controller Class: com.cognizant.springlearn.controller.HelloController

Method Signature: public String sayHello()

Response: "Hello World!!"

🔧 Setup Instructions
Make sure your project includes Spring Web dependency.

Create the HelloController in the specified package.

package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/hello")
    public String sayHello() {
        LOGGER.debug("START sayHello()");
        String message = "Hello World!!";
        LOGGER.debug("END sayHello()");
        return message;
    }
}
▶️ How to Run
Start the Spring Boot application (SpringLearnApplication.java).

Open browser or Postman.

Visit: http://localhost:8083/hello

You will see:

Hello World!!
🧪 Testing in Chrome (Browser)
Press F12 → Go to Network tab.

Access http://localhost:8083/hello.

Click the request in Network tab.

Check the Headers tab to view HTTP request and response headers.

📬 Testing in Postman
Open Postman → Create new GET request.

URL: http://localhost:8083/hello

Click Send

Response Body:

Hello World!!
Click Headers tab to inspect all HTTP header information.

📝 Notes
Logging is done using SLF4J.

Make sure port 8083 is configured in application.properties:

properties
server.port=8083
