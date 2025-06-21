Exercise 1: Implementing the Singleton Pattern

Scenario - 
The goal of this exercise is to create a logging utility class that maintains only one instance throughout the application's lifecycle. This ensures that all logging is handled in a consistent and centralized manner.

Objective-

- Ensure that only one instance of the Logger class exists.
- Provide a global method to access that single instance.
- Use the Singleton Design Pattern to achieve this.
- Verify the behavior using a test class.

Steps Followed- 

1. A new Java project named SingletonPatternExample was created.
2. A Logger class was defined with a private static variable to hold the single instance.
3. The constructor of the Logger class was made private to prevent direct instantiation.
4. A public static method was added to allow global access to the single instance.
5. A test class was created to confirm that multiple calls to the getInstance method return the same object.

Expected Behavior - 

- The Logger instance is created only once.
- All calls to access the Logger return the same instance.
- Messages logged through different references point to the same Logger.
- A check confirms that the references are equal, proving the Singleton behavior.

Outcome - 

The test confirms that only one instance of the Logger class is created and reused across the application. This meets the requirements of the Singleton Design Pattern and demonstrates consistent logging.

Conclusion - 

This exercise successfully applies the Singleton Design Pattern to a practical scenario. It highlights how single-instance utility classes can be designed and used effectively in real-world applications, especially for logging or configuration purposes.
