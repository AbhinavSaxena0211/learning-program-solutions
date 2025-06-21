public class BinarySearch {
    public static Product binarySearchById(Product[] products, int targetId){
        int left=0,right= products.length-1;
        while(left<=right){
            int mid = (left+right)/2;
            if(products[mid].productId==targetId){
                return products[mid];
            }else if(products[mid].productId<targetId){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }
        return null;
    }
    public static Product binarySearchByName(Product[] products, String targetName){
        int left=0,right= products.length-1;
        while(left<=right){
            int mid = (left+right)/2;
            int compare = products[mid].productName.compareToIgnoreCase(targetName);
            if (compare == 0) return products[mid];
            else if (compare < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }
}
