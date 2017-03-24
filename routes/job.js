var express = require('express');
var router = express.Router();
var fs = require('fs');

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

	res.locals.common = JSON.parse(fs.readFileSync("./data/commonJobInfo.json"));

	var jobIndex = req.params.job;
	if(jobIndex == undefined){
		// render the error page
		res.status(err.status || 404);
		res.render('error');
	}

	fs.readFile('./data/job.json', 'utf8', function (err, data) {
		if (err) {
			console.error('There was an error loading the job data.')
			res.status(err.status || 500);
		}
		jobs = JSON.parse(data);

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


});

module.exports = router;
