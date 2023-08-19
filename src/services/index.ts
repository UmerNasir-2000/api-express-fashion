import { Prisma } from "@prisma/client";
import { ProductModel } from "../models/product";
import { PaginationModel } from "../models/shared";
import { ProductRepository } from "../repository";

export default class ProductService {

    static async listProduct(): Promise<PaginationModel<ProductModel>> {
        const whereCriteria: Prisma.ProductWhereInput = {
            isPopular: true
        };

        const productCount = await ProductRepository.getProductCountWithCriteria(whereCriteria);
        const products = await ProductRepository.listProductWithCriteria(whereCriteria);

        return new PaginationModel<ProductModel>(
            productCount,
            2,
            products.map(product => new ProductModel(product))
        );
    }
    
}
