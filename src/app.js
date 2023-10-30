import express from "express";
import { router as passengerRouter } from "./passengers/passengers.route.js";

const app = express();

// Me permite recibir información en formato json (Client => Server)
app.use(express.json());

app.use("/api/v1", passengerRouter);

export default app;
