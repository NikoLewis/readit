var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var PostForm =React.createClass({
	getInitialState: function(){
		return({title: null, body:null})

	},
	componentDidMount: function(){
		console.log("mounted")
	},
	titleChange: function(e){
		console.log("title", e.target.value)
		this.setState({title: e.target.value})
	},
	bodyChange: function(e){
		console.log('body', e.target.value)
		this.setState({body: e.target.value})
	},
	makePost: function(){
		var info = this.state
		$.ajax({
			url: "/post",
			type: "POST",
			data:  info,
			success: function(data){
				console.log(data)
			}
		})

	},

	render: function(){
		return(
			<div>
				<form onSubmit={this.makePost}>
					title:
					<input type='text' onChange={this.titleChange}/>
					body:
					<input type='text' onChange={this.bodyChange}/>
					<input type='submit'/>
				</form>
			</div>
			)
	}
})

export default PostForm;