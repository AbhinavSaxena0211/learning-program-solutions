🔐 Spring Boot JWT Authentication Service
This project is a basic Spring Boot application that demonstrates how to authenticate a user using Basic Auth credentials and return a JWT (JSON Web Token) in response.

📌 Objective
Build an authentication service that:

Accepts username and password via Basic Auth (Authorization header)

Verifies credentials

Returns a JWT token if valid

🚀 How It Works
A GET request is made to /authenticate using HTTP Basic Authentication.

The controller:

Reads the Authorization header.

Decodes the base64-encoded credentials.

Verifies them (here, user:pwd is hardcoded).

If the credentials match:

A JWT token is generated using a secret key and returned as JSON.

If not:

A 403 Forbidden error is returned.

🛠️ Tools & Dependencies
Tool/Library	Version
Spring Boot	2.6.6
Spring Security	5.6.2 (lower version used for compatibility with WebSecurityConfigurerAdapter)
Java	17
jjwt (Java JWT library)	0.9.1
Maven	3.x

⚠️ Note: WebSecurityConfigurerAdapter is deprecated in Spring Security 5.7+. This project uses Spring Security 5.6.2, so the deprecated class is still supported.

🔧 Project Structure

springJwt/
├── controller/
│   └── AuthenticationController.java
├── security/
│   └── SecurityConfig.java
├── util/
│   └── JwtUtil.java
├── resources/
│   └── application.properties
├── SpringJwtApplication.java
└── pom.xml
🧪 Sample Usage
✅ Sample Request
Use the following curl command:

curl -s -u user:pwd http://localhost:8090/authenticate
✅ Sample Response

{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiw..."
}
Make sure your app is running on port 8090.

🔑 Key Components
🔐 AuthenticationController.java
Reads the Basic Auth header

Validates user and pwd

Returns JWT token via JwtUtil

🔐 JwtUtil.java
Uses jjwt to:

Sign JWTs with a secret key

Set subject, issuedAt, and expiration fields

🔐 SecurityConfig.java

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // No CSRF, no login page – just open authentication endpoint
}
✅ Uses WebSecurityConfigurerAdapter for simplicity and backwards compatibility.

▶️ Running the App
🔄 Step-by-step
Clone the project or create it via Spring Initializr.

Add required dependencies in pom.xml.

Run SpringJwtApplication.java.

Use curl or Postman to test:

GET http://localhost:8090/authenticate
Basic Auth: user / pwd
📝 Dependencies in pom.xml (add these)

<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
📌 Notes
This is a simple simulation for understanding JWT generation.

For real applications:

Store credentials securely (e.g., database with BCrypt)

Use HTTPS

Store the secret key securely (e.g., environment variable)