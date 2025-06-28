Exercise: Process Monthly Interest (Stored Procedure Exercise 3 - Scenario 1)

Description:
A stored procedure that calculates and updates the balance of all savings accounts by applying a 1% monthly interest.

How to Run:

Ensure the Accounts table exists and has AccountType and Balance columns.

Run the script to create the procedure.

Execute it with:
EXEC ProcessMonthlyInterest;


Exercise: Update Employee Bonus (Stored Procedure Exercise 3 - Scenario 2)

Description:
Stored procedure to increase salaries of employees in a specific department by a given bonus percentage.

How to Run:

Ensure the Employees table has Department and Salary columns.

Create the procedure.

Call it with:
EXEC UpdateEmployeeBonus('HR', 10);


Exercise: Transfer Funds Between Accounts (Stored Procedure Exercise 3 - Scenario 3)

Description:
A stored procedure that transfers funds between two accounts if the source account has sufficient balance.

How to Run:

Ensure the Accounts table exists with AccountID and Balance columns.

Create the procedure.

Execute it like:

EXEC TransferFunds(101, 102, 500);(EXAMPLE)



