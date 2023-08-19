import { Prisma, Product } from "@prisma/client";

export default class ProductModel {
    readonly id: string;
    readonly title: string;
    readonly slug: string;
    readonly inStock: boolean;
    readonly isPopular: boolean;
    readonly price: number;
    readonly images: Prisma.JsonValue;

    constructor(product: Product) {
        this.id = product.id;
        this.title = product.title;
        this.slug = product.slug;
        this.inStock = product.inStock;
        this.isPopular = product.isPopular;
        this.price = product.price.toNumber();
        this.images = product.images;
    }
}
