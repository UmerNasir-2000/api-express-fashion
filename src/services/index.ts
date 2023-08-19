import { Prisma, Product } from "@prisma/client";
import { DEFAULT_PAGE_NUMBER, PAGE_SIZE } from "../constants";
import Logger from "../lib/logger";
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

    static async getProduct(id: string): Promise<Product> {
        try {
            const product = await ProductRepository.getProduct(id);
            return product;
        } catch (error: any) {
            // TODO: Handle error handling...
            Logger.error(error)
            throw new Error(`Product with Id = ${id} does not exist.`)
        }
    }
    
}
