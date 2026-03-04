import express from "express"
import path from "path";
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/connectionDB.js";
dotenv.config();
import userRoutes from './routes/user.routes.js';
import blogRoutes from './routes/blog.routes.js';


const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use("/images" , express.static("uploads"))
app.use("/users" , userRoutes);
app.use("/blogs" , blogRoutes);


app.get("/", (req , res )=>{
    res.send("sameer is developer in uae an dis good developer post")
})

const PORT = process.env.PORT || 3000;

connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database connection failed:", err);
  });