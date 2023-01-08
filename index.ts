import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import projectRoutes from './src/routes/projects.routes';
import sprintRoutes from './src/routes/sprints.routes';
import taskRoutes from './src/routes/tasks.routes';
import userRoutes from './src/routes/users.routes';

import { errorhandler } from './src/middlewares/errorHandler';
import authentication from './src/middlewares/authentication';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const mongoDB = process.env.MONGODB_URL;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", userRoutes);

// from here all protected routes which require token authentication
app.use(authentication);
app.use("/api/v1", projectRoutes);
app.use("/api/v1", taskRoutes);
app.use("/api/v1", sprintRoutes);

app.use(errorhandler);

app.listen(port, () => {
  try{
    if(typeof mongoDB === "string"){
      mongoose.set('strictQuery',false);
      mongoose.connect(mongoDB).then((res) =>{
        console.log('db connected');
      }).catch((err) => {
        console.log('error in connecting db');
      })
    }
  }
  catch(err){
    console.log(err);
  }
  console.log(`[server]: Server is running at http://localhost:${port}`);
});