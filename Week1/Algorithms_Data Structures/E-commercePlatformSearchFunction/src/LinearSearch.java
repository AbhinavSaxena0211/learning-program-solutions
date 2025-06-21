public class LinearSearch {
    public static Product searchById(Product[] products, int targetId){
        for(Product p : products){
            if(p.productId == targetId)return p;
        }
        return null;
    }
    public static Product searchByName(Product[] products, String name){
        for(Product p: products){
            if(p.productName.equalsIgnoreCase(name)){
                return p;
            }
        }
        return null;
    }
}
