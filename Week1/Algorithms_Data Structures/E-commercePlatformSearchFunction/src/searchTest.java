import java.sql.SQLOutput;
import java.util.Arrays;
public class searchTest {
    public static void main(String[] args) {
        Product[] products = {
                new Product(1, "Laptop", "Electronics"),
                new Product(4, "Shoes", "Fashion"),
                new Product(3, "Phone", "Electronics"),
                new Product(2, "Shirt", "Fashion"),
                new Product(5, "Charger", "Electronics")
        };
        Product linearResult1 = LinearSearch.searchById(products,1);
        Product linearResult2 = LinearSearch.searchByName(products,"Phone");
        System.out.println("Linear Search Result... ");
        System.out.println("Linear By Id: "+ (linearResult1!=null?linearResult1:"Not Found"));
        System.out.println("Linear By Name: "+(linearResult2!=null?linearResult2:"Not Found"));
        Arrays.sort(products, (p1,p2) -> Integer.compare(p1.productId,p2.productId));
        Product binaryResult1 = BinarySearch.binarySearchById(products,3);
        System.out.println("Binary by ID: " + (binaryResult1 != null ? binaryResult1 : "Not found"));
        Arrays.sort(products, (p1, p2) -> p1.productName.compareToIgnoreCase(p2.productName));
        Product binaryResult2 = BinarySearch.binarySearchByName(products,"Shirt");
        System.out.println("Binary by Name: "+(binaryResult2 != null ? binaryResult2 : "Not found"));
    }
}
