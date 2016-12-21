var router = require("express").Router();
var db = require("../models");
var Vote = db.Vote


var postVote = function (req, res){
	var data = req.body
	Vote
		.create({
			PostId: data.PostId,
			vote: data.vote
		})
		.then(function(response){
			res.json(response)
		})
		.catch(function(err){
			console.log(err)
		})

}

var getVote = function(req,res){

	Vote
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
	.post(postVote)
	.get(getVote)

module.exports = router;