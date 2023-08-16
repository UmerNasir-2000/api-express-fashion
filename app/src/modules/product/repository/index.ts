import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: 'catalog' } })
class Catalog {

    @prop({ required: true })
    public name?: string;
  
}

const CatalogModel = getModelForClass(Catalog);

export default class ProductRepository { 

    static listProducts() { 
        return CatalogModel.find().exec();
    }

}