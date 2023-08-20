import { Prisma, Vendor } from "@prisma/client";
import { DEFAULT_PAGE_NUMBER, PAGE_SIZE } from "../constants";
import Logger from "../lib/logger";
import { PaginationModel } from "../models/shared";
import VendorRepository from "../repository/vendor.repository";

export default class VendorService {

    static async listVendor(pageSize: number = PAGE_SIZE, pageNumber: number = DEFAULT_PAGE_NUMBER): Promise<PaginationModel<Vendor>> {
        
        const whereCriteria: Prisma.VendorWhereInput = { };

        const vendorCount = await VendorRepository.getVendorCountWithCriteria(whereCriteria);

        const totalPages = Math.ceil( vendorCount / pageSize );

        const vendors = await VendorRepository.listVendorWithCriteria(whereCriteria);

        return new PaginationModel<Vendor>(
            vendorCount,
            totalPages,
            vendors
        );
        
    }

    static async getVendor(id: string): Promise<Vendor> {
        try {
            const vendor = await VendorRepository.getVendor(id);
            return vendor;
        } catch (error: any) {
            // TODO: Handle error handling...
            Logger.error(error)
            throw new Error(`Vendor with Id = ${id} does not exist.`)
        }
    }
    
}
