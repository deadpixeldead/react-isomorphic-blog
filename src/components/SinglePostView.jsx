var React = require('react/addons');
var PostStore = require('../stores/PostStore');
var ReactMarkdown = require('react-markdown');
//var request = require('superagent'),
//    config = require('../../config');
var Remarkable = require('remarkable');
var md = new Remarkable();

var input = '# This is a header\n\nAnd this is a paragraph';

var SinglePostView = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    componentDidMount : function() {
        PostStore.listen(this.onChange);
    },

    componentWillUnmount : function() {
        PostStore.unlisten(this.onChange);
    },

    onChange : function(state){
        this.setState(state);
    },

    getInitialState : function(){
        return PostStore.getState();
    },

    render : function() {

        return (
            <div className="markdown-body">
                <div className="header-section">
                    <h1 className="post-title">{this.state.currentPost.title}</h1>
                    <div className="author-details">
                        <img src={this.state.currentPost.author.photo} className="author-photo"/>
                        <span className="author-name">{this.state.currentPost.author.name}</span>
                    </div>   
                </div>
                <div className="text-section">
                    <div className="post-content" dangerouslySetInnerHTML={{__html: md.render(this.state.currentPost.content)}}/>
                </div>
            </div>
        )
    }
});

module.exports = SinglePostView;