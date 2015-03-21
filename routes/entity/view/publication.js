var express = require('express');
var router = express.Router();
var Publication = rootRequire('data/entities/publication');

router.get('/publication/:id', function(req, res, next) {
	var render = function(publication) {
		res.render('entity/view/publication', {
			title: 'BookBrainz',
			entity: publication
		});
	};

	Publication.findOne(req.params.id, {
		populate: [ 'aliases' ]
	})
		.then(render)
		.catch(function(err) {
			console.log(err.stack);
			next(err);
		});
});

module.exports = router;
