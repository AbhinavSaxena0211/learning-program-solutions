CREATE OR REPLACE PROCEDURE TransferFunds (
  from_acc IN NUMBER,
  to_acc IN NUMBER,
  amt IN NUMBER
) AS
  source_balance NUMBER;
BEGIN
  SELECT Balance INTO source_balance FROM Accounts WHERE AccountID = from_acc FOR UPDATE;

  IF source_balance >= amt THEN
    UPDATE Accounts
    SET Balance = Balance - amt
    WHERE AccountID = from_acc;

    UPDATE Accounts
    SET Balance = Balance + amt
    WHERE AccountID = to_acc;

    COMMIT;
  ELSE
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
  END IF;
END;
/
