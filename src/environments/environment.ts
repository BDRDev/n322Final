// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    // apiKey: 'AIzaSyASPXUlzdomUqUK_HMcFeavuRkKX_L5l04',
    // authDomain: 'n322store-3474e.firebaseapp.com',
    // databaseURL: 'https://n322store-3474e.firebaseio.com',
    // projectId: 'n322store-3474e',
    // storageBucket: 'n322store-3474e.appspot.com',
    // messagingSenderId: '630170232650'

    apiKey: "AIzaSyBsbdu1xqXy6MUd1KA4znQ_FRj9-5vBBtM",
    authDomain: "ionicnotes-78109.firebaseapp.com",
    databaseURL: "https://ionicnotes-78109.firebaseio.com",
    projectId: "ionicnotes-78109",
    storageBucket: "ionicnotes-78109.appspot.com",
    messagingSenderId: "108064943398"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
