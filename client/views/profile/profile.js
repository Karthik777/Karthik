/**
 * Created by karthik on 3/10/2016.
 */
Template.ProfileWrapper.rendered = function() {

};

Template.ProfileWrapper.events({
    "click #jumbotron-button": function(e, t) {
        e.preventDefault();
        Router.go("", {});
    }

});

Template.ProfileWrapper.helpers({

});
