Exercise 2: Implementing the Factory Method Pattern

Scenario -

This exercise involves implementing the Factory Method Design Pattern in a document management system. The goal is to create different types of documents (Word, PDF, Excel) using a factory method so that object creation is handled by separate factory classes instead of the main logic.

Objective -

- Apply the Factory Method Design Pattern.
- Create a flexible structure for generating various types of documents.
- Use an abstract factory class to define the object creation method.
- Implement concrete factory classes for each document type.
- Verify the functionality using a test class.

Steps Followed -

1. A new Java project named FactoryMethodPatternExample was created.
2. An interface or abstract class was defined to represent the generic Document.
3. Concrete classes were created for each document type (WordDocument, PdfDocument, ExcelDocument).
4. An abstract class named DocumentFactory was defined with a method called createDocument().
5. Concrete factory classes were created for each document type, implementing the createDocument() method.
6. A test class was written to demonstrate the creation of different document types using their respective factories.

Expected Behavior -

- The client code creates documents using factory classes, not directly with new operators.
- The correct document type is returned based on the factory used.
- The system is easy to extend in the future by adding new document types without modifying existing code.

Outcome -

The program successfully demonstrates the Factory Method Pattern. Each document is created through its factory class, making the creation logic independent from the client code. This structure follows the open/closed principle and supports scalability.

Conclusion -

This exercise shows how the Factory Method Pattern can be used to cleanly separate object creation logic from application logic. It provides a structured approach to managing multiple object types and is especially useful in large systems where new object types may need to be added frequently.
