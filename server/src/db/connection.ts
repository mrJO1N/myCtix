import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER ?? "",
  password: process.env.DB_PASS ?? "",
  host: process.env.DB_HOSTNAME ?? "LOCALHOST",
  port: Number(process.env.DB_PORT) ?? 5432,

  clientMinMessages: "notice",
});

export default sequelize;
