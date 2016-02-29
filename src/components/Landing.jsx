var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;
var PostActions = require('../actions/PostActions');

var SideBar = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render : function() {

        return (
            <section className="full-page">
                <h1>Hello! This is some random text.</h1>

                <div className="arrow">A</div>
            </section>
        )
    }
});

module.exports = SideBar;