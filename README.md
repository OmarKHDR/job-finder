# Job Finder
## Features of the Job Finder API

- **Job Management**:
	- Publish, update, and delete job postings.
	- Apply to job listings with user profiles.
	- Manage access to job postings (public/private visibility).

- **User Profiles**:
	- Create and manage profiles for both job publishers and applicants.
	- Upload resumes, portfolios, and other relevant documents.
	- View application history and saved job postings.

- **Authentication and Authorization**:
	- Secure user authentication using OAuth or JWT.
	- Role-based access control for publishers, applicants, and administrators.

- **Search and Filtering**:
	- Advanced search functionality for job listings.
	- Filter jobs by location, salary range, job type, and more.

- **Notifications**:
	- Real-time notifications for job applications and updates.
	- Email and in-app notifications for important events.

- **Analytics and Insights**:
	- Track job posting performance with detailed analytics.
	- View application trends and user engagement metrics.

## Out of scope for now
	<!-- - **Third-Party Integrations**:
		- Integration with LinkedIn, GitHub, and other platforms for seamless profile imports.
		- Support for external job boards and recruitment tools.

	- **Responsive Design**:
		- Fully responsive design for optimal use on mobile, tablet, and desktop devices.

	- **Developer-Friendly API**:
		- Comprehensive API documentation with examples.
		- Support for RESTful endpoints and versioning.

	- **Additional Features**:
		- Bookmark and share job postings.
		- Multi-language support for a global audience.
		- Secure payment gateway for premium job postings or subscriptions. -->

## DB Business Requirements
### Database Requirements

#### Entities
1. **Applicants** (Job Seekers)
2. **Recruiters** (Job Publishers)
3. **Companies**
4. **Job Offers**

#### Relationships
1. Each **applicant** may work for one or more **companies**.
2. Each **company** must have at least one **recruiter**.
3. Each **company** can publish multiple **job offers**.
4. Each **recruiter** is associated with a **company**.
5. Each **applicant** can apply to multiple **job offers**.
6. Each **job offer** can receive applications from multiple **applicants**.

#### Attributes
1. **Applicants**:
	- name and primary contact info
	- Current working company (optional).
	- Work experience (list of roles, durations, and companies).
	- CV (uploaded document or link).
	- Filled job applications (list of applied job offers).
	- Saved job offers (bookmarked jobs).
	- Social media accounts (e.g., LinkedIn, GitHub).

2. **Recruiters**:
	- Published job offers (list of jobs created by the recruiter).
	- Associated company (mandatory).
	- Role in the company (e.g., HR Manager, Recruiter).
	- Social media accounts (e.g., LinkedIn, Twitter).

3. **Companies**:
	- Name and field of interest (e.g., IT, Finance, Healthcare).
	- Departments (list of departments within the company).
	- Employees (list of associated applicants and recruiters).
	- Published job offers (list of jobs posted by the company).

4. **Job Offers**:
	- Title and description.
	- Required qualifications and skills.
	- Salary range and job type (e.g., full-time, part-time, contract).
	- Location (remote, on-site, hybrid).
	- Application deadline.
	- Associated company and recruiter.

#### Additional Considerations
- Ensure proper indexing for frequently queried fields like job titles, locations, and applicant profiles.
- Use foreign keys to enforce relationships between entities (e.g., applicant to company, recruiter to company, job offer to recruiter).
- Normalize the database to reduce redundancy while maintaining performance for search and filtering operations.
- Implement soft deletes for entities like job offers and applications to allow recovery if needed.
- Track timestamps for creation and updates on all entities for audit purposes.
- Design the schema to support future scalability, such as adding multi-language support or integrating third-party services.
## Work Flow
- Divide each step of each feature into smaller steps 
- manage feature implementation using trellio
- 