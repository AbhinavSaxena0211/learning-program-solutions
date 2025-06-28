CREATE OR REPLACE PROCEDURE SendLoanDueReminders AS
BEGIN
  FOR rec IN (
    SELECT l.LoanID, l.EndDate, c.Name
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.EndDate BETWEEN TRUNC(SYSDATE) AND TRUNC(SYSDATE) + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'Reminder: ' || rec.Name || ' - Loan ' || rec.LoanID ||
      ' is due on ' || TO_CHAR(rec.EndDate, 'DD-Mon-YYYY')
    );
  END LOOP;
END;
/
