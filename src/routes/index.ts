import { Application } from "express";
import { default as productRouter } from "./product.route";
import { default as vendorRouter } from "./vendor.route";

const setupRoutes = (app: Application) => {  
    app.use('/products/', productRouter);
    app.use('/vendors/', vendorRouter);
}

export default setupRoutes;