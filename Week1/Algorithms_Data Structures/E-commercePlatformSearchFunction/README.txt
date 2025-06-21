Exercise 2: E-commerce Platform Search Function

Scenario -

This exercise involves developing a search feature for an e-commerce platform. The goal is to implement and compare linear and binary search techniques to optimize search performance across different types of product data.

Objective -

- Understand and explain asymptotic notation (Big O) for algorithm analysis.
- Create a Product class with attributes such as productId, productName, and category.
- Implement linear and binary search to find products by ID and name.
- Analyze the performance of both search techniques and identify the most suitable one for an e-commerce platform.

Steps Followed -

1. A Product class was created with fields for productId, productName, and category.
2. Two search classes were implemented: LinearSearch and BinarySearch.
3. In LinearSearch:
   - Search by productId was implemented using simple iteration.
   - Search by productName was also implemented using linear scanning.
4. In BinarySearch:
   - The array was sorted based on the field to be searched (ID or name).
   - Search was performed using the binary search technique.
5. A test class was created to demonstrate:
   - Searching by productId and productName using both linear and binary search.
   - The differences in how each method behaves and performs.

Expected Behavior -

- Linear search works on unsorted arrays and is simple to implement.
- Binary search requires sorted arrays and provides faster results, especially for larger datasets.
- The test output shows that both techniques can find products, but binary search is significantly more efficient when used correctly.

Outcome -

The search feature works as intended. Linear search is straightforward and suitable for small or unsorted data, while binary search provides better performance when the data is sorted. Both methods were verified through practical testing with product data.

Conclusion -

This exercise demonstrates the importance of choosing the right search algorithm based on the size and structure of the data. Binary search is more efficient for large and sorted datasets, which is ideal for real-world e-commerce platforms where performance and speed are crucial.
