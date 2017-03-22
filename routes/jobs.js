var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	res.locals.page = 'jobs';

	var jobs = {
		'Manufacturing / Operations': [
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States'
			},
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States'
			},
			{
				name: 'Process Engineering Technician',
				location: 'Portland OR. United States'
			}
		]
	};

	res.render('jobs', {
		title: 'Silicon United Jobs',
		jobs: jobs
	});
});

module.exports = router;
