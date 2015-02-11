'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Asc, app, auth, database) {

  app.get('/asc/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/asc/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/asc/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/asc/example/render', function(req, res, next) {
    Asc.render('index', {
      package: 'asc'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
