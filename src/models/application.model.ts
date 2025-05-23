import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";

class Application extends Model {}

const applicationSchema = {

}


async function initApplicationModel() {
	const sequelize = await getDB();
	Application.init(applicationSchema, {sequelize});
	return Application;
}

export default initApplicationModel;