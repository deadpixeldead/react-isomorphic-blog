var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');

var Header = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    showAllPosts : function(e){
        e.preventDefault();
        PostActions.loadAllPosts((function(){
            this.context.router.transitionTo('postListView');
        }).bind(this));
    },

    hideMenu : function(e){
        e.preventDefault();
        var orig = document.body.className;
        document.body.className = "menu-closed";
    },

    showMenu : function(e){
        e.preventDefault();
        var orig = document.body.className;
        document.body.className = " ";
    },

    render : function() {
        return (
            <div className="header">
                <h1>
                    <a href="#" onClick={this.hideMenu}>Arrow </a>
                    <a href="#" onClick={this.showMenu}>Burger</a>
                    <a href="#" onClick={this.showAllPosts}>   |  Recent Posts</a>
                </h1>
            </div>
        )
    }
});

module.exports = Header;