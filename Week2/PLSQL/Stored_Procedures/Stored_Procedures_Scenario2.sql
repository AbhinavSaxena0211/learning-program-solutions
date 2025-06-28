CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_name IN VARCHAR2,
  bonus_percent IN NUMBER
) AS
BEGIN
  FOR emp IN (
    SELECT EmployeeID, Salary
    FROM Employees
    WHERE Department = dept_name
  ) LOOP
    UPDATE Employees
    SET Salary = emp.Salary + (emp.Salary * (bonus_percent / 100))
    WHERE EmployeeID = emp.EmployeeID;
  END LOOP;

  COMMIT;
END;
/
