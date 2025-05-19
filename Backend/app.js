import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);