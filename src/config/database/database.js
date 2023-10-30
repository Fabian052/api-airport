import { Sequelize } from "sequelize";
import { envs } from "../environments/environments.js";

const sequelize = new Sequelize(envs.DB_URI, {
  logging: false,
});

export async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully. 😀");
  } catch (error) {
    throw new Error("Error al autenticar: ", error);
  }
}

export async function syncUp() {
  try {
    await sequelize.sync();
    console.log("Connection synced successfully. 😊");
  } catch (error) {
    throw new Error("Synchronization error: ", error);
  }
}

export default sequelize;
