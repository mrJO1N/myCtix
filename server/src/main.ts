import express from "express";
import dotenv from "dotenv";

/* ------------------- */

dotenv.config();
const app = express();

const PORT = process.env.PORT ?? 80;

/* ------------------- */

app.get("/", (req, res) => {
  res.send("l");
});

/* ------------------- */

app.listen(PORT, () =>
  console.log(`server is running at ${PORT}. http://localhost:${PORT}`)
);
