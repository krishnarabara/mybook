import express from 'express';
import router from './controllers';
import connectDB from './shared/utils/dataBase/mongo';

export const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  console.log("connectDB");
  res.json({
    message: "Hello World!!",
    
  });
});

app.use("/api", router);

export default app