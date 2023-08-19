import { Prisma, Product } from "@prisma/client";
import prisma from "../db";

interface PaginationOptions { 
    limit: number;
    offset: number; 
}

export default class ProductRepository {

    static listProductWithCriteria(
        whereCriteria?: Prisma.ProductWhereUniqueInput,
        paginationOptions?: PaginationOptions
    ): Promise<Product[]> {
        return prisma.product.findMany({
            where: whereCriteria,
            take: paginationOptions?.limit,
            skip: paginationOptions?.offset,
            orderBy: { createdAt: 'desc' }
        });
    }

    static getProductCountWithCriteria(
        whereCriteria?: Prisma.ProductWhereUniqueInput,
    ): Promise<Number> {
        return prisma.product.count({
            where: whereCriteria,
        });
    }

    static getProduct(id: string): Promise<Product> {
        return prisma.product.findUniqueOrThrow({ where: { id } });
    }

}