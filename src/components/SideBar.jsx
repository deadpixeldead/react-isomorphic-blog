var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');

var SideBar = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    showAllPosts : function(e){
        e.preventDefault();
        PostActions.loadAllPosts((function(){
            this.context.router.transitionTo('postListView');
        }).bind(this));
    },

    render : function() {
        return (
            <section className="side-bar">
                <h1>this is some section</h1>
            </section>
        )
    }
});

module.exports = SideBar;