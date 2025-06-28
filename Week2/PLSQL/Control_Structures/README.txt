Exercise: Apply Senior Citizen Discount (Scenario 1)

Description:
This procedure loops through all customers and applies a 1% interest rate discount to loans of customers older than 60 years.

How to Run:

Ensure the Customers and Loans tables are created.

Run the procedure.

Use EXEC ApplySeniorCitizenDiscount; to execute.

Exercise: Promote VIP Customers (Scenario 2)

Description:
Sets IsVIP = 1 for all customers who have a balance greater than $10,000.

Note:
Run the following once if the IsVIP column doesn't exist:

ALTER TABLE Customers ADD (IsVIP NUMBER(1) DEFAULT 0);

How to Run:

Ensure the Customers table includes IsVIP column.

Run the procedure.

Execute with EXEC PromoteVIPCustomers;

Exercise: Loan Due Reminder (Scenario 3)

Description:
Fetches loans due in the next 30 days and prints reminders for customers.

How to Run:

Enable output using SET SERVEROUTPUT ON;

Run the procedure.

Execute with EXEC SendLoanDueReminders;