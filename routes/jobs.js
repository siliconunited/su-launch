var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET jobs page. */
router.get('/', function(req, res, next) {

	res.locals.page = 'jobs';

	fs.readFile('./data/jobs.json', 'utf8', function (err, data) {
		if (err) {
			console.error('There was an error loading the jobs data.')
			res.status(err.status || 500);
		}
		jobs = JSON.parse(data);

		res.render('jobs', {
			title: 'Silicon United Jobs',
			jobs: jobs
		});
	});

});

module.exports = router;
