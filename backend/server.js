import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import productRoutes from './routes/productRoutes.js'
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import path from 'path'

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend_/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend_', 'build', 'index.html'))
})


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));