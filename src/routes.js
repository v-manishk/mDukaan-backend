import { Router } from "express";

import authRoutes from "./modules/auth/auth.routes.js";
import userRoutes from "./modules/users/user.routes.js";
import productRoutes from "./modules/products/product.routes.js";
import pricingRoutes from "./modules/pricing/pricing.routes.js";
import customerRoutes from "./modules/customers/customer.routes.js";
import billingRoutes from "./modules/billing/billing.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/pricing", pricingRoutes);
router.use("/customers", customerRoutes);
router.use("/billing", billingRoutes);

export default router;
