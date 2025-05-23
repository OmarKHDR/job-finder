import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";

class Resume extends Model {}

const resumeSchema = {

}


async function initResumeModel() {
	const sequelize = await getDB();
	Resume.init(resumeSchema, {sequelize});
	return Resume;
}

export default initResumeModel;