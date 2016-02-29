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

        var color1 = {backgroundColor: "#7f8c8d"};
        var color2 = {backgroundColor: "#3498db"};
        return (
            <section className="side-bar">
                <header className="side-header">
                    <a className="side-avatar" href="#">
                        <img src="/images/nikolas.jpg" alt="Nikolas Haag | Dev Blog" width="100" height="100"/>
                        </a>
                        <h2 className="side-heading">Nikolas Haag /  <br/> Frontend Developer at the internets</h2>
                            <ul className="social-icons">
                                <li>
                                    <a className="btn-social fa-codepen" href="http://codepen.io/dead_pixel/" style={color1}></a>
                                </li>
                                <li>
                                    <a className="btn-social fa-twitter" href="http://twitter.com/" style={color2}></a>
                                </li>
                            </ul>
                </header>
            </section>
        )
    }
});

module.exports = SideBar;