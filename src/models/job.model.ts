import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";

class Job extends Model {}

const jobSchema = {

}


async function initJobModel() {
	const sequelize = await getDB();
	Job.init(jobSchema, {sequelize});
	return Job;
}

export default initJobModel;