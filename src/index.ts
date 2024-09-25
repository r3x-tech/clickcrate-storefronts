import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productAggregatorRoutes from "./routes/productAggregator";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/products", productAggregatorRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
