
# Backend APIs for Fashion Website (Asim Jofa)

## Tech

    1. ExpressJS
    2. Typescript
    3. MySQL
    4. Prisma
    5. Envalid
    6. Elastic Search
    7. Docker
    8. Zod
    9. Axios
    10. Tsyringe
    11. Pino
    12. Passport

## External APIs

    1. [SimPaisa] (https://simpaisa.com/)
    2. [TPL] (https://tplmaps.com/)
    3. [Yoco] (https://developer.yoco.com/)
    3. [SendGrid] (https://sendgrid.com/)

## Endpoints

### Auth

    - [ ] POST /api/register/
    - [ ] POST /api/login/
    - [ ] POST /api/logout/

### Vendors

    - [ ] GET /api/vendors/
    - [ ] GET /api/vendors/:id/
    - [ ] GET /api/vendors/:id/product/
    - [ ] POST /api/vendors/
    - [ ] PATCH /api/vendors/:id/
    - [ ] DELETE /api/vendors/:id/

### Products

    - ✅ GET /api/products/
    - ✅ GET /api/products/:id/
    - [ ] GET /api/products/search/
    - [ ] GET /api/products/suggestions/:id
    - [ ] GET /api/products/resource/
    - [ ] GET /api/products/ambassadors/
    - [ ] GET /api/products/wishlist
    - [ ] POST /api/products/
    - [ ] POST /api/products/wishlist
    - [ ] PATCH /api/products/:id/
    - [ ] DELETE /api/products/:id/

### Payments

    - [ ] POST /api/payments/coins
    - [ ] POST /api/payments/webhook

### Cart

    - [ ] GET /api/cart/items/
    - [ ] POST /api/cart/

### Orders

    - [ ] GET /api/orders/
    - [ ] GET /api/orders/:id/
    - [ ] POST /api/orders/