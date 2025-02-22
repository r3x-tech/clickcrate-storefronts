import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productAggregatorRoutes from "./routes/creator";
import storefrontRoutes from "./routes/storefront";
import { errorHandler } from "./middlewares/errorHandler";
import { ACTIONS_CORS_HEADERS_MIDDLEWARE } from "@solana/actions";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(ACTIONS_CORS_HEADERS_MIDDLEWARE));

app.get("/", (req, res) => {
  res.send("Welcome to ClickCrate Storefronts API!");
});

app.use("/products", productAggregatorRoutes);
app.use("/storefront", storefrontRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
