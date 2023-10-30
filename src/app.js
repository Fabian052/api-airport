import express from "express";
import { router } from "./routes/routes.js";

const app = express();

// Me permite recibir información en formato json (Client => Server)
app.use(express.json());

app.use("/api/v1", router);

export default app;
