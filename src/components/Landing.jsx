var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');

var SideBar = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    liftLanding: function () {
        console.log('aaa');
        console.log(document.getElementsByClassName("side-bar"));
        var orig = document.getElementsByClassName("side-bar")[0].className;
        document.getElementsByClassName("side-bar")[0].className = orig + ' visible';
        orig = document.getElementsByClassName("content")[0].className;
        document.getElementsByClassName("content")[0].className = orig + ' visible';
        document.getElementById("full-page").className = "lifted";
        document.getElementById("big-card").className = "lifted";
        document.getElementById("blog-wrap").className = "fade-away";
    },

    render : function() {

        return (
            <section id="full-page">
                <div id="big-card">
                    <h1>Nikolas Haag Test / dead pixel</h1>
                    <div className="icon-wrapper">
                        <i className="social"></i>
                        <i className="social"></i>
                        <i className="social"></i>
                        <i className="social"></i>
                        <i className="social"></i>
                    </div>
                </div>
                <div id="blog-wrap" onClick={this.liftLanding}>
                    <h2>Blog</h2>
                    <i className="arrow"></i>
                </div>
            </section>
        )
    }
});

module.exports = SideBar;