import { Router } from "express";
import { router as passengerRouter } from "../passengers/passengers.route.js";
import { router as cityRouter } from "../city/city.route.js";

export const router = Router();

// Todo acá se concatena con /api/v1
router.use("/passengers", passengerRouter);
router.use("/city", cityRouter);
