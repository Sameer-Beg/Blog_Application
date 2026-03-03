import express from "express"
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
app.listen(PORT , ()=>{
    connectDB();
    console.log(`server is running on the port ${PORT}`)
})