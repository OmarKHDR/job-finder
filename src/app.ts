import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import router from "@routes/router";
import logger from "@utils/logger";



dotenv.config({ path: path.resolve(__dirname, '.env') });
import { getDB } from "@config/db";
import User from "@models/user.model";
const port = parseInt(process.env.PORT) || 5000;
const hostname = process.env.HOST || 'localhost';


const app = express()

app.use(morgan(":method :url :status :response-time ms",{
	stream: {
		write: (message) => logger.info(message.trim()),
		},
	})
);
app.use(router)
app.listen(port, hostname, ()=>{
	logger.info(`server started at port ${port} and host ${hostname}`);
})

getDB().then(res => {console.log(res.models, User)})
export default app;