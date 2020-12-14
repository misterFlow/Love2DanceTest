// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { AngularFirestoreModule } from '@angular/fire/firestore';
import "firebase";
import "firebase/auth";
import "firebase/firestore";
"firebase/firestore";
"firebase";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDUasJOTvERyy2EZkuKN-V9YdgxNIOeX74",
    authDomain: "love2dance-89110.firebaseapp.com",
    databaseURL: "https://love2dance-89110.firebaseio.com",
    projectId: "love2dance-89110",
    storageBucket: "love2dance-89110.appspot.com",
    messagingSenderId: "6304993797",
    appId: "1:6304993797:web:94367daab48b3dcefa026c"
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
