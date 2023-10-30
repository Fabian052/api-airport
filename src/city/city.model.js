import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const City = sequelize.define(
  "city",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    lat: {
      allowNull: false,
      type: DataTypes.FLOAT(),
    },
    lon: {
      allowNull: false,
      type: DataTypes.FLOAT(),
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: "now()",
      field: "created_at",
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["name", "country"],
      },
    ],
  }
);

export default City;
