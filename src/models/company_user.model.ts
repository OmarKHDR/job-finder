import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";

class CompanyUsers extends Model {}

const companyUsersSchema = {

}


async function initCompanyUsersModel() {
	const sequelize = await getDB();
	CompanyUsers.init(companyUsersSchema, {sequelize});
	return CompanyUsers;
}

export default initCompanyUsersModel;