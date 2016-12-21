var React = require('react');
var ReactDOM = require('react-dom');
import PostForm from './post-form.jsx'
import allPosts from './post-form.jsx'

var App = React.createClass({
	render(){
		return(
			<div>
				<allPosts/>
				<PostForm/>
			</div>
		)
	}
})

ReactDOM.render(<App/>, document.getElementById('root'))