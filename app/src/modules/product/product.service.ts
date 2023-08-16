import ProductRepository from "./repository";


export default class ProductService { 

    static listProducts() { 
        return ProductRepository.listProducts();
    }
    
}