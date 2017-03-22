var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	res.locals.page = 'job';

	var jobs = [
		{
			title: 'Process Engineering Technician',
			about: 'Tektronix is a place where people are challenged to explore the boundaries of what’s possible, bringing the digital future one step closer every day. Our work accelerates technological breakthroughs that are revolutionizing culture and industry worldwide. Through precision-engineered measurement solutions, we work with our customers to eliminate the barriers between inspiration and realization of world-changing technologies. Realize your true potential at Tektronix – join us in revolutioneering a better tomorrow.',
			description: 'As a Process Engineering technician, you will assist process engineers in the development of new products and processes. Specifically, you will be responsible for developing prototypes in the quick turn area that allow design engineers to get early feedback on their ideas. This work environment demands a rapid pace and requires an individual to adapt minute to minute. Creativity and problem solving are also highly valued skills.',
			duties: [
				'Generate and maintain setup sheets. Create and modify programs for equipment in the area',
				'Write and submit Engineering Change Orders based on Engineering Redlines.',
				'Follow experiment plans, take data, and enter data in spreadsheets.',
				'Gather requested materials (EMM forms), equipment, and supplies for experiments.',
				'Document (in writing and with pictures) assembly or process issues, NPI or regular production.'
			],
			qualifications: [
				'Must be a U.S. Citizen or have U.S. Permanent Resident status.',
				'2 years working with microelectronics processes (epoxy dispense, die placement, wire-bonding, welding, etc.).',
				'Experience with various electronics materials (conductive epoxies, non-conductive epoxies, solders, circuit boards, die, passives, etc.).',
				'Experience programming process equipment.',
				'Excellent hand eye coordination.',
				'Ability to work in a clean room environment.',
				'Experience with various computer programs and be progressive in learning new programs: Microsoft applications: Word, Excel. 2D drawing programs for programming and setup sheets.',
				'Proficient with Oracle MRP application – be able to research lot numbers',
				'Must be able to quickly adjust activities to accommodate changing priorities.',
				'Must be able to multitask, and use good judgment to optimize execution of multiple requests.',
				'Ability to work independently and elicit support and cooperation of co-workers.',
				'Must be able to follow/interpret/question verbal and written technical requests, understand Cartesian coordinates, be observant, and call for clarification if a problem is suspected',
				'Must have good written and verbal English communication skills, be able to write flags or emails clearly communicating technical issues.',
				'Must have good comprehension skills, read and extract technical information from Process Specs, data sheets, and reports.',
				'Must have willingness and ability to work extended work day (after the other Associates have left and the machines are free), including occasional evenings and weekends.',
			],
			preferredSkills: [
				'Basic working knowledge of electronic circuits.'
			],
			compliance: [
				'This position\'s primary/essential functions are subject to US Government ITAR compliance requirements under current government contracts. Therefore, all applicants must be either a US Citizen or a holder of a current valid Green Card and must provide proof of citizenship or legal residency via a birth certificate, a current valid green card, unexpired passport, or a naturalization certificate. We encourage applicants to bring such proof to their interview. However, in no case will applicants be allowed to begin their scope of work in this specific position without providing such proof.',
				'All employment offers are contingent upon successful completion of our pre-employment drug screening and background/criminal check. Silicon United is an equal opportunity employer. Tektronix does not discriminate based on race, color, religion, sex, sexual orientation, gender identity, national origin, marital status, age, physical or mental disability (if the individual can perform the essential functions of the position with reasonable accommodation), pregnancy, childbirth or related medical condition, veteran\'s status, citizenship status, ancestry or any other status protected by applicable federal, state, or local law.'
			],
			howToApply: [
				'Apply Online. If you are a qualified individual with a disability or a disabled veteran, you have the right to request a reasonable accommodation if you are unable or limited in your ability to use or access our Careers website as a result of your disability. If you need an accommodation or assistance in using our Careers website, please call 1-866-272-5573 or send an email to applyassistance@fortive.com. A representative will contact you regarding your accommodation request.',
				'Candidates with less education/experience may be considered for other opportunities.'
			],
			info: {
				organization: 'Silicon United',
				field: 'Manufacturing / Operations',
				primaryLocation: 'North America - United States - Oregon - Portland',
				schedule: 'Full-time'
			}
		}
	];

	var curJobIndex = req.param.job;
	if(!curJobIndex){
		// render the error page
		res.status(err.status || 404);
		res.render('error');
	}

	res.render('job', {
		title: 'Silicon United Jobs',
		job: jobs[curJobIndex]
	});
});

module.exports = router;
