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

    hideMenu : function(){
        document.body.className = "menu-closed";
    },

    showMenu : function(){
        document.body.className = " ";
    },

    toggleMenu : function(e){
        e.preventDefault();
        var classOfMenu = document.getElementById("menu-icon").className;
        console.log(classOfMenu);
        if (classOfMenu == "active") {
            this.hideMenu();
            document.getElementById("menu-icon").className = "";
        } else {
            this.showMenu();

            document.getElementById("menu-icon").className = "active";
        }
    },

    render : function() {
        return (
            <div className="header">
                <div onClick={this.toggleMenu} id="menu-icon" className="active">
                    <div className="burger"></div>
                </div>
                <div className="recent">
                    <h1 onClick={this.showAllPosts}>
                        Recent Posts
                    </h1>
                </div>
            </div>
        )
    }
});

module.exports = Header;