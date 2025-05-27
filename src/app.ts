import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import logger from "@utils/logger";
dotenv.config({ path: path.resolve(__dirname, '.env') });
import { getDB } from "@config/db";
import initModels from "@models/index";
import routerFactory from "@routes/router";


const port = parseInt(process.env.PORT) || 5000;
const hostname = process.env.HOST || 'localhost';


const app = express()

app.use(morgan(":method :url :status :response-time ms",{
	stream: {
		write: (message) => logger.info(message.trim()),
		},
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routerFactory(app);

async function startServer(){
	try{
		const sequelize = await getDB();
		const models = await initModels();
		await sequelize.sync({force: true});
		logger.info("Database & tables created!");

		app.listen(port, hostname, ()=>{
			logger.info(`server started at port ${port} and host ${hostname}`);
		})
	}catch(error){
		logger.error("Error starting server:", error);
		process.exit(1);
	}
}


startServer();

export default app;