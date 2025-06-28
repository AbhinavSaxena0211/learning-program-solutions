ALTER TABLE Customers ADD (IsVIP NUMBER(1) DEFAULT 0);

CREATE OR REPLACE PROCEDURE PromoteVIPCustomers AS
BEGIN
    FOR cust IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    ) LOOP
        UPDATE Customers
        SET IsVIP = 1
        WHERE CustomerID = cust.CustomerID;
    END LOOP;

    COMMIT;
END;
/
