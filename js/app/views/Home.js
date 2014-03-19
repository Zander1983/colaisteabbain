define(function (require) {

    "use strict";

    var _                   = require('underscore'),
        Backbone            = require('backbone'),
        tpl                 = require('text!tpl/Home.html'),
        template            = _.template(tpl);

    return Backbone.View.extend({

        initialize: function (options) {

            console.log('in home view');
            this.render();

        },
  

        render: function (options) {
            
            console.log('template() is ');
            console.log(template());
            
            this.$el.html(template({context:'Home'}));
            return this;
        },
      
        

    });

});