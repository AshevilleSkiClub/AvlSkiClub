'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Asc = new Module('asc');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Asc.register(function(system, app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Asc.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Asc.menus.add({
    title: 'asc example page',
    link: 'asc example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Asc.aggregateAsset('css', 'asc.css');
  
  app.set('views', __dirname + '/server/views/');
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Asc.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Asc.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Asc.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Asc;
});
