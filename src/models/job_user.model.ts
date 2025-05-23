import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";

class JobUsers extends Model {}

const jobUsersSchema = {

}


async function initJobUsersModel() {
	const sequelize = await getDB();
	JobUsers.init(jobUsersSchema, {sequelize});
	return JobUsers;
}

export default initJobUsersModel;