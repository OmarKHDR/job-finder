import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import router from "@routes/router";
import logger from "./utils/logger";
import morgan from 'morgan';


dotenv.config({ path: path.resolve(__dirname, '.env') });
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';


const app = express()
app.use(router)

app.use(morgan(":method :url :status :response-time ms",{
    stream: {
	  write: (message) => logger.info(message.trim()),
    },
  })
);
app.listen(5000, "localhost", ()=>{
	logger.info(`server started at port ${port} and host ${host}`);
})

export default app;