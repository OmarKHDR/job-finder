import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";

class ApplicationReviewers extends Model {}

const applicationReviewersSchema = {

}


async function initApplicationReviewersModel() {
	const sequelize = await getDB();
	ApplicationReviewers.init(applicationReviewersSchema, {sequelize});
	return ApplicationReviewers;
}

export default initApplicationReviewersModel;