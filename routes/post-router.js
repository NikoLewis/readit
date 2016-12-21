var router = require("express").Router();
var db = require("../models");
var Post = db.Post
var Comment = db.Comment
var Vote = db.Vote

var postPost = function (req, res){
	var data = req.body
	console.log(data)
	Post
		.create({

			title: data.title,
			body: data.body
		})
		.then(function(response){
			res.json(response)
		})
		.catch(function(err){
			console.log(err)
		})

}

var getPost = function(req,res){

	Post.
		findAll({
		order: [['createdAt', 'ASC']],
		include: [
			{model: Comment},
			{model: Vote}
			]
		})
		.then(function(data){
			res.send(data)
		})
		.catch(function(err){
			console.log(err)
		})
}



router.route('/')
	.post(postPost)
	.get(getPost)

module.exports = router;

