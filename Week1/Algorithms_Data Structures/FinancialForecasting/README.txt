Exercise 7: Financial Forecasting

Scenario -

This exercise involves developing a simple financial forecasting tool that predicts future values based on past data. The forecasting logic is implemented using a recursive algorithm, which models how an investment grows over time with a fixed annual growth rate.

Objective -

- Understand the concept of recursion and how it can be applied to real-world problems.
- Use recursion to calculate the future value of an investment based on growth rate and duration.
- Analyze the efficiency of the recursive approach and explore ways to improve it if needed.

Steps Followed -

1. The concept of recursion was studied and understood as a method where a function calls itself to solve smaller versions of a problem.
2. A method was created that calculates the future value by multiplying the result of the previous year by the growth factor.
3. The recursive function takes three parameters: initial value, growth rate, and number of years. The base case handles the condition when the number of years is zero.
4. A test class was written to calculate and print the future value based on an initial amount of ₹1000, a growth rate of 10%, and a forecast period of 5 years.

Expected Behavior -

- The method should recursively compute the value of the investment after the given number of years.
- Each recursive call reduces the year by one and applies the growth rate.
- The final result should match the manually calculated compound interest value for the same input.

Outcome -

The recursive function accurately calculates the future value after 5 years, reflecting compounded growth. The output matches expected financial projections and verifies that recursion can simplify repetitive calculations.

Conclusion -

This exercise demonstrates the use of recursion in solving a financial forecasting problem. While recursion is clean and easy to implement for small inputs, it can be optimized using iteration or memoization for larger inputs to avoid performance issues. This approach is a good fit for academic and conceptual understanding of both recursion and compound growth.
