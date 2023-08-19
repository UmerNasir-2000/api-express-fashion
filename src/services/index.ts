import { Prisma } from "@prisma/client";
import { DEFAULT_PAGE_NUMBER, PAGE_SIZE } from "../constants";
import { ProductModel } from "../models/product";
import { PaginationModel } from "../models/shared";
import { ProductRepository } from "../repository";

export default class ProductService {

    static async listProduct(pageSize: number = PAGE_SIZE, pageNumber: number = DEFAULT_PAGE_NUMBER): Promise<PaginationModel<ProductModel>> {
        const whereCriteria: Prisma.ProductWhereInput = {
            isPopular: true
        };

        const productCount = await ProductRepository.getProductCountWithCriteria(whereCriteria);

        const totalPages = Math.ceil( productCount / pageSize );

        const products = await ProductRepository.listProductWithCriteria(whereCriteria);

        return new PaginationModel<ProductModel>(
            productCount,
            totalPages,
            products.map(product => new ProductModel(product))
        );
    }
    
}
