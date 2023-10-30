import { Router } from "express";

import {
  findAllPassengers,
  createPassenger,
  findOnePassenger,
  updatePassenger,
  deletePassenger,
} from "./passengers.controller.js";

export const router = Router();

// Init features

// Routes
router.route("/passengers").get(findAllPassengers).post(createPassenger);

router
  .route("/passengers/:id")
  .get(findOnePassenger)
  .patch(updatePassenger)
  .delete(deletePassenger);

// End features
