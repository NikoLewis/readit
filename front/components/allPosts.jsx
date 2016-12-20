var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var AllPosts = React.createClass({
	getIntialState: function(){
		return({
			posts: []

		})

	},
	componentDidMount: function(){
		var info = this.state
		$.ajax({
			url: '/post',
			type: 'GET',
			data: info,
			success: function(data){
				console.log(data)
			}

		})

	},
	render: function(){
		if(this.state){
			console.log('rendering')

		}else{
			return (<p>'loading...please wait'</p>)
		}

	}

})


export default AllPosts;