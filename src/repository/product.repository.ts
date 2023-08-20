import { Prisma, Product } from "@prisma/client";
import { PaginationOptions } from "../types";

import prisma from "../db";


export default class ProductRepository {

    static listProductWithCriteria(
        whereCriteria?: Prisma.ProductWhereInput,
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
        whereCriteria?: Prisma.ProductWhereInput,
    ): Promise<number> {
        return prisma.product.count({ where: whereCriteria });
    }

    static getProduct(id: string): Promise<Product> {
        return prisma.product.findUniqueOrThrow({ where: { id } });
    }

}