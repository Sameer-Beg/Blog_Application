import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";

dotenv.config();

const app = express();

// ✅ Middlewares
app.use(express.json());

app.use(cors({
  origin: "*",   // Allow all origins (good for testing)
}));

app.use("/images", express.static("uploads"));
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
  res.send("Sameer is developer 🚀");
});

const PORT = process.env.PORT || 3000;

// ✅ Connect DB first, then start server
connectDB(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed ❌", err);
  });