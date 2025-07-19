Bank Microservices Project – Account & Loan

This project contains two independent Spring Boot microservices developed to simulate banking operations – one for handling **account details** and another for handling **loan details**.

Each service is designed as a separate Maven project, runs on its own port, and returns a dummy response in JSON format. This setup demonstrates how services can be split to follow the **microservices architecture**.

---

Microservices Included

1. Account Microservice
- **Port**: `8083`
- **Endpoint**: `GET /accounts/{number}`
- **Sample Response**:
```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343
}
2. Loan Microservice
Port: 8081

Endpoint: GET /loans/{number}

Sample Response:

{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}
🛠️ Technologies Used
Java 17

Spring Boot (v3.5.3)

Maven

RESTful API (Spring Web)

DevTools for auto-reload

📂 Project Structure
D:\
└── <EMPLOYEE_ID>\
    └── microservices\
        ├── account\
        └── loan\
Replace <EMPLOYEE_ID> with your actual employee ID (e.g., EMP123456).

How to Run
Build each service:
mvn clean package


Run the applications (AccountApplication.java and LoanApplication.java).

Test the endpoints in your browser or Postman:

http://localhost:8083/accounts/123456

http://localhost:8081/loans/123456