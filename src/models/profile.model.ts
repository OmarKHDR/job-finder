import { DataTypes, Model } from "sequelize";
import { getDB } from "@config/db";

class Profile extends Model {}

const profileSchema = {

}


async function initProfileModel() {
	const sequelize = await getDB();
	Profile.init(profileSchema, {sequelize});
	return Profile;
}

export default initProfileModel;