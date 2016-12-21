var router = require("express").Router();
var db = require("../models");
var Comment = db.Comment


var postComment = function (req, res){
	var data = req.body
	Comment
		.create({
			PostId: data.PostId,
			comment: data.comment
		})
		.then(function(response){
			res.json(response)
		})
		.catch(function(err){
			console.log(err)
		})

}

var getComment = function(req,res){

	Comment
		.findAll({
		order: [['createdAt', 'DESC']]
		})
		.then(function(data){
			res.send(data)
		})
		.catch(function(err){
			console.log(err)
		})
}



router.route('/')
	.post(postComment)
	.get(getComment)

module.exports = router;

