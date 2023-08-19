import { Application } from "express";
import { default as productRouter } from "./product.route";

const setupRoutes = (app: Application) => {  
    app.use('/products/', productRouter);
}

export default setupRoutes;