var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	res.locals.page = 'jobs';

	var jobs = {
		'Manufacturing / Operations': [
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States',
				id: 0
			},
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States',
				id: 1
			},
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States',
				id: 2
			}
		],
		'Project Management': [
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States',
				id: 3
			},
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States',
				id: 4
			},
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States',
				id: 5
			}
		]
	};

	res.render('jobs', {
		title: 'Silicon United Jobs',
		jobs: jobs
	});
});

module.exports = router;
