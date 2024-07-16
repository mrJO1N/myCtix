import express from "express";
import dotenv from "dotenv";

import routers from "./routers/main.routes";
import sequelize from "./db/connection";

/* ------------------- */

dotenv.config();
const app = express();

const PORT = process.env.PORT ?? 80;

/* ------------------- */
app.use(express.json());
app.use("/api", routers);

/* ------------------- */

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`server is running at ${PORT}. http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error(err);
  }
}

startServer();
