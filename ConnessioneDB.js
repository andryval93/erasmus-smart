// Initialize the default app
var defaultApp = firebase.initializeApp(defaultAppConfig);

console.log(defaultApp.name);  // "[DEFAULT]"

// You can retrieve services via the defaultApp variable...
var defaultStorage = defaultApp.storage();
var defaultDatabase = defaultApp.database();

// ... or you can use the equivalent shorthand notation
defaultStorage = firebase.storage();

defaultDatabase = firebase.database();

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "erasmus-smart-2018.firebaseapp.com",
    databaseURL: "https://erasmus-smart-2018.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

