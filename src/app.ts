import express from "express";
import "dotenv/config";
import { PORT } from "./config";
import router from "./routes";
import { dbConnection } from "./dbConnection/db";

// PORT
// const PORT = process.env.PORT || 3000;

const app = express();

async function startServer() {
  await dbConnection(); // 🔥 ensures DB is connected first

  app.use(express.json());
  app.use("/api", router);

  app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("❌ Server failed to start", err);
  process.exit(1);
});