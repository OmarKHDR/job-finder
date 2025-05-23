import { getDB } from "@config/db";
import logger from "@utils/logger";
import initUserModel from "@models/user.model";
import initCompanyModel from "@models/company.model";
import initJobModel from "@models/job.model";
import initApplicationModel from "@models/application.model";
import initApplicationReviewersModel from "@models/application_reviewer.model";
import initCompanyUsersModel from "@models/company_user.model";
import initJobUsersModel from "@models/job_user.model";
import initProfileModel from "@models/profile.model";
import initResumeModel from "@models/resume.model";
import initSkillModel from "@models/skill.model";
import initSkillUsersModel from "@models/user_skills.model";

async function initModels() {
    try {
        const sequelize = await getDB();
        
        // Initialize all models
        const User = await initUserModel();
        const Company = await initCompanyModel();
        const Job = await initJobModel();
        const Application = await initApplicationModel();
        const ApplicationReviewers = await initApplicationReviewersModel();
        const CompanyUsers = await initCompanyUsersModel();
        const JobUsers = await initJobUsersModel();
        const Profile = await initProfileModel();
        const Resume = await initResumeModel();
        const Skill = await initSkillModel();
        const SkillUsers = await initSkillUsersModel();

        // Define associations here
        // Example:
        // User.hasMany(Job);
        // Job.belongsTo(User);

        return {
            User,
            Company,
            Job,
            Application,
            ApplicationReviewers,
            CompanyUsers,
            JobUsers,
            Profile,
            Resume,
            Skill,
            SkillUsers
        };
    } catch (error) {
        logger.error('Failed to initialize models:', error);
        throw error;
    }
}

export default initModels;

