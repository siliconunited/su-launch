var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	res.locals.page = 'jobs';

	var jobs = {
		'Engineering and Production': [
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States',
				id: 0
			},
			{
				name: 'Embedded Systems Engineer',
				location: 'Portland OR. United States',
				id: 1
			},
			{
				name: 'Intern Embedded Systems Engineer',
				location: 'Portland OR. United States',
				id: 5
			}
		],
		'Project Management': [
			{
				name: 'Senior Technical Project Manager',
				location: 'Portland OR. United States',
				id: 2
			},
			{
				name: 'Intern Technical Project Manager',
				location: 'Portland OR. United States',
				id: 4
			}
		],
		'Business Development and Sales': [
			{
				name: 'Business Development Manager',
				location: 'Portland OR. United States',
				id: 3
			}
		]
	};

	res.render('jobs', {
		title: 'Silicon United Jobs',
		jobs: jobs
	});
});

module.exports = router;
