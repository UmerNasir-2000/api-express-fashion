import { Prisma, Vendor } from "@prisma/client";
import prisma from "../db";

interface PaginationOptions { 
    limit: number;
    offset: number; 
}

export default class VendorRepository {

    static listVendorWithCriteria(
        whereCriteria?: Prisma.VendorWhereInput,
        paginationOptions?: PaginationOptions
    ): Promise<Vendor[]> {
        return prisma.vendor.findMany({
            where: whereCriteria,
            take: paginationOptions?.limit,
            skip: paginationOptions?.offset,
            orderBy: { createdAt: 'desc' }
        });
    }

    static getVendorCountWithCriteria(
        whereCriteria?: Prisma.VendorWhereInput,
    ): Promise<number> {
        return prisma.vendor.count({ where: whereCriteria });
    }

    static getVendor(id: string): Promise<Vendor> {
        return prisma.vendor.findUniqueOrThrow({ where: { id } });
    }

}