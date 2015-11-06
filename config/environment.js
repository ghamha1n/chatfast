/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'chatfast',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' https://*.firebase.com https://*.firebaseio.com wss://*.firebaseio.com" ,
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://ajax.googleapis.com/ https://*.firebase.com https://*.firebaseio.com  wss://*.firebaseio.com " ,
      'default-src': "'self' https://*.firebase.com https://*.firebaseio.com  wss://*.firebaseio.com",
      'font-src': "'self' data: http://fonts.gstatic.com/ http://fonts.googleapis.com/",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com/"
    },
    firebase: 'https://chatfast.firebaseio.com/',
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
