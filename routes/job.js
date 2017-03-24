var express = require('express');
var router = express.Router();

/* GET job with no index. */
router.get('/', function(req, res, next) {
	res.locals.page = 'job';

	var jobIndex = req.params.job;
	if(jobIndex == undefined){
		// render the error page
		res.status(err.status || 404);
		res.render('error');
	}
});

/* GET job. */
router.get('/:job', function(req, res, next) {

	res.locals.page = 'job';

	res.locals.common = {
		about: 'Silicon United is a team of globally distributed coders, designers, makers, teachers and thinkers. We have a passion and a knack for taking our customers’ microchips and ensuring they meet the needs of artists and the maker community. Our code speaks to the masses and we democratize hardware with a unique process that not only makes our code social, but makes it easily accessible and extensible to a global audience. Our clients understand our mission and now have the opportunity to supplement marketing budgets with drivers, firmware and example projects, that have the potential to live on for years, as opposed to the typical disposable digital commodities. Join us in building the largest repository of hardware software on the net.',
		compliance: [
			// 'This position\'s primary/essential functions are subject to US Government ITAR compliance requirements under current government contracts. Therefore, all applicants must be either a US Citizen or a holder of a current valid Green Card and must provide proof of citizenship or legal residency via a birth certificate, a current valid green card, unexpired passport, or a naturalization certificate. We encourage applicants to bring such proof to their interview. However, in no case will applicants be allowed to begin their scope of work in this specific position without providing such proof.',
			'All employment offers are contingent upon successful completion of our pre-employment drug screening and background/criminal check. Silicon United is an equal opportunity employer. Silicon United does not discriminate based on race, color, religion, sex, sexual orientation, gender identity, national origin, marital status, age, physical or mental disability (if the individual can perform the essential functions of the position with reasonable accommodation), pregnancy, childbirth or related medical condition, veteran\'s status, citizenship status, ancestry or any other status protected by applicable federal, state, or local law.'
		],
		howToApply: [
			'Please send an email with your resume (in PDF format) to <a href="mailto:hiring@siliconunited.com">hiring@siliconunited.com</a>.',
			'If you are a qualified individual with a disability or a disabled veteran, you have the right to request a reasonable accommodation if you are unable or limited in your ability to use or access our website as a result of your disability. If you need an accommodation or assistance in using our website, please send an email to <a href="mailto:support@siliconunited.com">support@siliconunited.com</a>. A representative will contact you regarding your accommodation request.',
			'Candidates with less education/experience may be considered for other opportunities.'
		],
	}
	var jobs = [
		{
			id: 0,
			name: 'Process Engineering Technician',
			description: 'As a Process Engineering Technician, you will be key in developing new products and processes. Specifically, you will be responsible for constructing new and extending existing frameworks that aid in firmware and driver development. This work environment demands a rapid pace and requires an individual to adapt minute to minute. Creativity and problem solving are also highly valued skills.',
			duties: [
				// 'Generate and maintain setup sheets. Create and modify programs for equipment in the area',
				// 'Write and submit Engineering Change Orders based on Engineering Redlines.',
				'Follow experiment plans, take data, and enter data in spreadsheets.',
				'Gather requested materials (EMM forms), equipment, and supplies for experiments.',
				'Document (in writing and with pictures) assembly or process issues, NPI or regular production.',
				'First responder to production/QA flags. Disposition parts for rework, scrap, or acceptance. Propose corrective action where appropriate.',
				'Recognizes deviation from accepted practice, assesses the reason for the deviation, proposes plan to address deviation. Call for the required help.',
				'Propose updates to documentation based on Associate feedback or troubleshooting.',
				'Train Associates on processes.'
			],
			qualifications: [
				// 'Must be a U.S. Citizen or have U.S. Permanent Resident status.',
				'2 years working with microelectronics processes (epoxy dispense, die placement, wire-bonding, welding, etc.).',
				'Experience with various electronics materials (conductive epoxies, non-conductive epoxies, solders, circuit boards, die, passives, etc.).',
				// 'Experience programming process equipment.',
				'Excellent hand eye coordination.',
				// 'Ability to work in a clean room environment.',
				'Experience with various computer programs and be progressive in learning new applications: Github, Excel, Platform IO, CAD programs for programming and setup sheets.',
				// 'Proficient with Oracle MRP application – be able to research lot numbers',
				'Must be able to quickly adjust activities to accommodate changing priorities',
				'Ability to multitask, and use good judgment to optimize execution of multiple requests',
				'Ability to work independently and elicit support and cooperation of co-workers.',
				'Must be able to follow/interpret/question verbal and written technical requests, be observant, and call for clarification if a problem is suspected',
				'Must have good written and verbal English communication skills, be able to create bugs/flags or emails clearly communicating technical issues.',
				'Must have good comprehension skills, read and extract technical information from process specs, data sheets, and reports.'
			],
			preferredSkills: [
				'Intermediate working knowledge of electronic circuits.'
			],
			info: {
				seniorityLevel: 'Senior',
				industry: 'Computer Software, Electronic Hardware, Internet',
				employmentType: 'Contract',
				organization: 'Silicon United',
				jobFunctions: 'Engineering, Information Technology',
				primaryLocation: 'North America - United States - Oregon - Portland'
			}
		},
		{
			id: 1,
			name: 'Embedded Systems Engineer',
			description: 'Being an Embedded Systems Engineer at Silicon United is a bit different than what is typically expected. So please read the qualifications carefully to know what you are getting yourself into. More specifically, you may be required to create concept documents that explain how an embedded system could work with a specific set of components. This work demands a creative individual that has hardware and techical chops. Creativity and problem solving are must.',
			duties: [
				'Work with marketing teams to provide detail for how a set of hardware components work in a system',
				'Collaborate in brainstorm sessions with the creative team to provide technical knowledge and insight',
				'Develop software that meets internal coding standards',
				'Ability to collaborate and work remotely with other engineers',
				'Digital signal processing (DSP) design, development and testing',
				'Embedded software development for microcontrollers',
				'Building software for sensing applications with MEMS sensors',
				'Field programmable gate array (FPGA) architecture, design, development and test',
				'System engineering, planning and feature analysis',
			],
			qualifications: [
				// 'Must be a U.S. Citizen or have U.S. Permanent Resident status.',
				'BS or MS in computer science or equivalent work experience',
				'5+ years of embedded development for consumer products',
				'Demonstrated ability to deliver highly robust and reliable products',
				'Excellent hand eye coordination and organization skills.',
				'Experience using version control systems.',
				'Must have experience with connected products',
				'Must have experience programming in one of the following languages: C, C++, Python, MicroPython, Java',
				'Experience with various computer programs and be progressive in learning new applications: Github, Excel, Platform IO, circuit design programs',
				'Experience working with embedded Wi-Fi development platforms',
				'Must be able to multitask, and use good judgment to optimize execution of multiple requests.',
				'Ability to work independently and elicit support and cooperation of co-workers.',
				'Must be able to follow/interpret/question verbal and written technical requests, be observant, and call for clarification if a problem is suspected',
				'Must have good written and verbal English communication skills, be able to create bugs/flags or emails clearly communicating technical issues.',
				'Must have good comprehension skills, read and extract technical information from process specs, data sheets, and reports.'
			],
			preferredSkills: [
				'Excellent working knowledge of electronic circuits.',
				'Ability to write code and develop firmware for various types of hardware components.',
			],
			info: {
				seniorityLevel: 'Senior',
				industry: 'Computer Software, Electronic Hardware, Internet',
				employmentType: 'Contract',
				organization: 'Silicon United',
				jobFunctions: 'Sales, Business Development',
				primaryLocation: 'North America - United States - Oregon - Portland'
			}
		},
		{
			id: 2,
			name: 'Senior Technical Project Manager',
			description: 'Silicon United is looking for a seasoned Senior Technical Project Manager to join our team. In order to succeed in this role, you will need an basic understanding of the microelectronics landscape and a desire and willingness to learn more.',
			duties: [
				'Manage a project or projects, with the collaboration of the stakeholder committee in such a way that the work results are delivered on time and within budget.',
				'Define the project management strategy and approach (this may include adapting the work reference model, e.g. the work method or solution delivery process used by the delivery group).',
				'Develop the project statement, the project plans (communication, scope, quality, risk, human resources, schedule, financial and environment requirements), and the various project report.',
				'Plan, organize, and control the activities and resources of the delivery group.',
				'Lead, support, and follow up on the execution of the project plans.',
				'Interview, select, and integrate new team members into the project.',
				'Define project assignments according to needs and review the performance of team members.',
				'Manage the budget and schedule of the project.',
				'Monitor, evaluate, and report on the progress of the delivery group.',
				'Monitor, evaluate, and report on project performance (budget, cost, schedule, scope, quality, risk, and issue).',
				'Monitor and report on project financial status.',
				'Maintain overall change control procedure, overall project plans, and detailed plan.',
				'Ensure that the project work results are compliant with the stated requirements, priorities, and strategies of the project.',
				'Maintain a liaison with the client, business solution manager, and external providers to coordinate the project activities.',
				'Manage the relationship with the external providers to ensure their performance and products or services meet contractual agreements.',
				'Integrate the results of the external providers into the project and ensure an appropriate and timely outcome.',
				'Manage change requests and outstanding issues.',
				'Submit major change requests to the coordination and steering committees.',
				'Participate in development workshops, when necessary.',
				'Participate in quality control and quality assurance activities.',
				'Participate in the development of project procedures.',
				'Control deliverable review and obtain written approval for them.',
				'Carry out project progress and status reviews.',
				'Recommend corrective actions to the steering committee and ensure execution of approved corrective actions.',
				'Communicate project progress and directions to members of the delivery organization and steering committee.',
				'Raise project issues and risks, as well as quality and scope deviations.',
				'Escalate issues, risks and problems to the identified authority when the situation so requires.',
				'When necessary, participate in contract negotiations with the client and external provider.',
			],
			qualifications: [
				'Direct experience in a technical role in software development',
				'Experience managing multiple software projects in multiple development disciplines and experience with agile development methodologies like Scrum',
				'Proven ability to work effectively with a wide range of stakeholders and ability to influence a wide range of interests',
				'Ability to move projects forward with high-level direction and a reputation for taking initiative to resolve issues and meet commitments',
				'Strong organizational and communication skills including effective communication with technical and non-technical audiences',
				'Proven ability to grow and thrive in a flexible, dynamic environment with minimal guidance.',
				'A roll-up-your-sleeves mentality; someone who can set team direction, but also willing to jump in and help out',
				'Must be able to multitask, and use good judgment to optimize execution of multiple requests.',
				'Must have good written and verbal English communication skills, be able to create bugs/flags or emails clearly communicating technical issues.',
				'Must have good comprehension skills, read and extract technical information from process specs, data sheets, and reports.'
			],
			preferredSkills: [
				'Formal Education in Computer Science, Electrical Engineering, or equivalent work experience',
				'Consulting background, including Business Development',
				'Program/Project Director experience',
				'Experience delivering firmware or software projects',
				'Working knowledge of Github',
			],
			info: {
				seniorityLevel: 'Senior',
				industry: 'Computer Software, Electronic Hardware, Internet',
				employmentType: 'Contract',
				organization: 'Silicon United',
				jobFunctions: 'Management, Delivery',
				primaryLocation: 'North America - United States - Oregon - Portland'
			}
		},
		{
			id: 3,
			name: 'Business Development',
			description: 'The Business Development Manager is responsible for developing strategies and driving plans to give Silicon United a competitive advantage and broker new relationships with existing microelectronics hardware manufacturers or distributors. A major component of the role will also involve integrating Silicon United\'s current process with industry trends, business seeking strategies, regulatory environments, local ecosystem development, and other factors in performing the aforementioned activities.',
			duties: [
				'Lead cross-functional teams of technology engineers, legal, finance, consultants, and other stakeholders in assessing risks as well as opportunities to shape Silicon United\'s supply chain',
				'Identify and evaluate opportunities in regards to their alignment with the Silicon United technology roadmap; available paths to realization; the risks, rewards, and approaches required from each path; and prepare recommendations to senior management.',
				'Perform strategic assessments and provide recommendations in anticipation of and in response to industry developments, such as partnerships, investments, and joint ventures',
				'Mentor the rest of the organization with business development activities and strategic risk assessments',
				'Drive activity in partnership with the account and practice leaders',
				'Work with new and existing clients to build a pipeline and secure new MSAs',
				'Activity and relationship-focused',
				'Sell to multiple accounts',
				'Drive attendance of marketing events',
				'Develop and share sales collateral',
				'Manage negotiations of the opportunities in the pipeline',
				'Define winning themes that are based on competition',
				'Motivation and ability to work remotely',
			],
			qualifications: [
				'6 + years of previous sales and account management experience',
				'Passionate about sales and technology',
				'Proven track record of breaking into and growing new accounts',
				'Strong verbal and written communication skills; strong customer service and interpersonal skills',
				'Able to partner with clients to understand their organizational needs and recommend solutions that add value to their business',
				'Excellent collaboration and team-building skills',
				'Organized and methodical; strong prioritization and negotiation skills',
				'Strong process orientation coupled with an ability to work with virtual teams',
				'Budget and project management experience',
				'Experienced in building relationships with CxOs and business decision-makers',
				'Skilled at leading teams through complex technology solution sales',
				'Experienced and adept at aligning teams to work toward a common goal; consistently demonstrates strong people management skills',
				'Creative and innovative; seen as a visionary in his/her approach'
			],
			preferredSkills: [
				'Basic knowledge of electronic circuits',
				'Have a broad understanding of the microelectronics market landscape, including emerging players',
				'Strong collaboration skills and communication skills necessary to develop relationships and trust with Silicon United\'s internal stakeholders',
			],
			info: {
				seniorityLevel: 'Director',
				industry: 'Computer Software, Electronic Hardware, Internet',
				employmentType: 'Contract',
				organization: 'Silicon United',
				jobFunctions: 'Business Development, Sales',
				primaryLocation: 'North America - United States - Oregon - Portland'
			}
		}
	];

	var jobIndex = req.params.job;
	if(jobIndex == undefined){
		// render the error page
		res.status(err.status || 404);
		res.render('error');
	}

	//Find the job with the id.
	res.locals.job = {};
	for(var i=0; i<jobs.length; i++){
		if(parseInt(jobs[i].id) === parseInt(jobIndex)){
			res.locals.job = jobs[i];
		}
	}

	res.render('job', {
		title: 'Silicon United Jobs'
	});
});

module.exports = router;
