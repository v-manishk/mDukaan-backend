import express from "express";
import "dotenv/config";
import routes from "./routes.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
