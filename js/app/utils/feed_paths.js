define(function (require) {

    "use strict";

 
    var Feeds = {};

   
    Feeds.getFeed = function(date_str) {
    
         var feeds = {};
         
            feeds[""]  = '/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw';
            feeds["news"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw';          
            feeds["people"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=2&format=raw'; 
            feeds["school-policies"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=3&format=raw'; 
            feeds["second-level"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=4&format=raw'; 
            feeds["about-us"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=5&format=raw'; 
            feeds["further-education"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=6&format=raw'; 

            return feeds[Backbone.history.fragment];

    };
   
    return Feeds;

    
});