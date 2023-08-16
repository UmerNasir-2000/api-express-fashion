
interface Product { 
    id: string;
    title: string;
}

const products: Product[] = [
    { id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', title: 'AJJM-05' },
    { id: '4dc3dbf4-2391-447f-b0a6-06f6efcdde3b', title: 'AJHJ-02' },
    { id: '5f884e1a-78f0-4410-91d1-2a65b3b72518', title: 'AJJM-03' },
    { id: 'b9749dc7-9781-464a-b959-72d635c5b574', title: 'AJBP-07' },
]

export default class ProductRepository { 

    static listProducts(): Product[] { 
        return products;
    }

}