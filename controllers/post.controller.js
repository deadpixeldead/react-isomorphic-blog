/**
 * Created by Sandeep on 28/06/15.
 */

var request = require('superagent'),
    config = require('../config');

exports.showAllPosts = function(req,res,next){
    request.get(config.baseUrl+'/static/posts.json',function(err,response){
       res.locals.data = {
           "PostStore" : {
               "posts" : response.body
           }
       }
       next();
    });
}

exports.loadPostsViaAjax = function(req,res){
    request.get(config.baseUrl+'/static/posts.json',function(err,response){
        res.json(response.body);
    });
}

exports.showSinglePost = function(req,res,next){
    var id = req.params.id;
    request.get(config.baseUrl+'/static/posts.json',function(err,response){

        var posts = response.body;

        posts.forEach(function(post){
            if(post.id === parseInt(id,10)){
                request.get(config.baseUrl+'/static/' + id + '.md',function(err,response) {
                    post['content'] = response.text;
                    res.locals.data = {
                        "PostStore" : {
                            "currentPost" : post
                        }
                    };
                    next();
                });

            }
        });

        //next();
    });
}

exports.loadSinglePostViaAjax = function(req,res){
    var id = req.params.id;
    request.get(config.baseUrl+'/static/posts.json',function(err,response){
        response.body.forEach(function(post){
            if(post.id === parseInt(id,10)){

                request.get(config.baseUrl+'/static/' + id + '.md',function(err,response) {
                            post['content'] = response.text;
                            return res.json(post);
                });
            }
        });
    });
}