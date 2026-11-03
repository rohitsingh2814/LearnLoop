import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();

app.use(cors({
    origin: "http//localhost:5173",
    credentials: true
}))

app.use(express.json());
app.use(cookieParser());

app.get('/health', (req, res) => {
    res.send("Backend is running");
})

app.get('/', (req, res) => {
    res.json("welcome! to LearnLoop backend")
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Is Running on Port ${PORT}`);
})

