import { ProductRepository } from "../repository";

export default class ProductService { 

    static listProduct() { 
        return ProductRepository.listProductWithCriteria();
    }

}